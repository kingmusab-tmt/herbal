import React from "react";
import "./FAQ.css";

const FAQ = () => {
  return (
    <div className="faq-section" id="Faq">
      <h2 className="text-center">
        Frequently Asked <span>Questions</span>
      </h2>
      <div class="accordion" id="accordionExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingOne">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              WHAT IS THE DOSAGE AND ADMINISTRATION
            </button>
          </h2>
          <div
            id="collapseOne"
            class="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <p>
                Adult 30ml Every Morning on Empty Stomach, 30 Minutes before
                Meal. Children <strong>(9 -12)</strong> Two Teaspoonful{" "}
                <strong>(10ml)</strong> 2times Daily.
                <strong>(5-8 Years)</strong> One Teaspoonful (5ml) 2times Daily
                30minutes before Meal.
              </p>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingTwo">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              WHAT DO I NEED TO KNOW ABOUT THE MEDICINE
            </button>
          </h2>
          <div
            id="collapseTwo"
            class="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              Ijele Herbal Mixture Should Not Be Taken By: Pregnant Woman,
              Nursing Mother's And Children Below 5years{" "}
              <strong> Please Keep Out Of The Reach Of Children</strong>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingThree">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              IS THE PRODUCT REGISTERED WITH NAFDAC
            </button>
          </h2>
          <div
            id="collapseThree"
            class="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <strong>YES</strong> It is registered with registration number
              NAFDAC REG NO.A7-2559L
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
