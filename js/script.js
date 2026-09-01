(function () {
  "use strict";

  const STANDARD_BOX_MONTHLY_PRICE = 660;
  const QUESTION_NAMES = ["winter-clothes", "bedding", "travel-hobby", "seasonal-home"];
  const currencyFormatter = new Intl.NumberFormat("ja-JP");
  let selectedStandardBoxCount = null;
  let hasAttemptedSubmit = false;

  function getRecommendedBoxCount(totalScore) {
    if (!Number.isFinite(totalScore) || totalScore < 0 || totalScore > 8) {
      throw new RangeError("Simulator score must be between 0 and 8.");
    }

    if (totalScore <= 1) return 1;
    if (totalScore <= 3) return 2;
    if (totalScore <= 5) return 3;
    return 4;
  }

  function calculateMonthlyPrice(boxCount) {
    return boxCount * STANDARD_BOX_MONTHLY_PRICE;
  }

  const simulatorApi = Object.freeze({
    standardBoxMonthlyPrice: STANDARD_BOX_MONTHLY_PRICE,
    getRecommendedBoxCount,
    calculateMonthlyPrice,
    getSelectedBoxCount: function () {
      return selectedStandardBoxCount;
    },
  });

  const globalScope = typeof window === "undefined" ? globalThis : window;
  globalScope.sotoSimulator = simulatorApi;

  if (typeof document === "undefined") return;

  function initializeFaq() {
    const questions = Array.from(document.querySelectorAll(".faq__question"));

    questions.forEach(function (question) {
      const answerId = question.getAttribute("aria-controls");
      const answer = answerId ? document.getElementById(answerId) : null;
      if (!answer) return;

      question.setAttribute("aria-expanded", "false");
      answer.hidden = true;

      question.addEventListener("click", function () {
        const isExpanded = question.getAttribute("aria-expanded") === "true";

        question.setAttribute("aria-expanded", String(!isExpanded));
        answer.hidden = isExpanded;
      });
    });
  }

  initializeFaq();

  const form = document.querySelector("[data-simulator-form]");
  if (!form) return;

  const errorMessage = document.querySelector("#simulator-error");
  const result = document.querySelector("#simulator-result");
  const boxCountOutput = result.querySelector("[data-simulator-box-count]");
  const monthlyPriceOutput = result.querySelector("[data-simulator-monthly-price]");
  const startButton = result.querySelector("[data-simulator-start]");
  const questionGroups = Array.from(form.querySelectorAll("[data-question]"));

  function getMissingQuestions(formData) {
    return QUESTION_NAMES.filter(function (questionName) {
      return !formData.has(questionName);
    });
  }

  function updateQuestionErrors(missingQuestions) {
    questionGroups.forEach(function (questionGroup) {
      const questionName = questionGroup.dataset.question;
      const isMissing = missingQuestions.includes(questionName);

      questionGroup.classList.toggle("is-invalid", isMissing);
      if (isMissing) {
        questionGroup.setAttribute("aria-invalid", "true");
      } else {
        questionGroup.removeAttribute("aria-invalid");
      }
    });
  }

  function resetResult() {
    selectedStandardBoxCount = null;
    result.hidden = true;
    startButton.removeAttribute("data-box-count");
  }

  form.addEventListener("change", function () {
    const formData = new FormData(form);
    const missingQuestions = getMissingQuestions(formData);

    resetResult();
    if (hasAttemptedSubmit) {
      updateQuestionErrors(missingQuestions);
    }

    if (missingQuestions.length === 0) {
      errorMessage.textContent = "";
      updateQuestionErrors([]);
      hasAttemptedSubmit = false;
    }
  });

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = new FormData(form);
    const missingQuestions = getMissingQuestions(formData);

    if (missingQuestions.length > 0) {
      hasAttemptedSubmit = true;
      resetResult();
      updateQuestionErrors(missingQuestions);
      errorMessage.textContent = "4つの質問すべてに回答してください。";

      const firstMissingInput = form.querySelector(
        'input[name="' + missingQuestions[0] + '"]',
      );
      if (firstMissingInput) firstMissingInput.focus();
      return;
    }

    const totalScore = QUESTION_NAMES.reduce(function (score, questionName) {
      return score + Number(formData.get(questionName));
    }, 0);
    const recommendedBoxCount = getRecommendedBoxCount(totalScore);
    const monthlyPrice = calculateMonthlyPrice(recommendedBoxCount);

    selectedStandardBoxCount = recommendedBoxCount;
    hasAttemptedSubmit = false;
    boxCountOutput.textContent = String(recommendedBoxCount);
    monthlyPriceOutput.textContent = currencyFormatter.format(monthlyPrice);
    startButton.dataset.boxCount = String(recommendedBoxCount);
    errorMessage.textContent = "";
    updateQuestionErrors([]);
    result.hidden = false;
  });

  startButton.addEventListener("click", function () {
    if (selectedStandardBoxCount === null) return;

    const detail = {
      boxType: "standard",
      boxCount: selectedStandardBoxCount,
      monthlyPrice: calculateMonthlyPrice(selectedStandardBoxCount),
    };

    document.dispatchEvent(
      new CustomEvent("soto:simulator-selection", {
        bubbles: true,
        detail,
      }),
    );

    const application = document.querySelector("#application");
    if (!application) return;

    const quantityInput = application.querySelector('[name="standard-box-quantity"]');
    if (quantityInput) {
      quantityInput.value = String(selectedStandardBoxCount);
      quantityInput.dispatchEvent(new Event("change", { bubbles: true }));
    }

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    application.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
  });
})();
