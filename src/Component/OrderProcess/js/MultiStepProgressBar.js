import React from "react";
import "../css/MultiStepProgressBar.css";
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";

/**
 * References: https://codesandbox.io/s/v81noxykml?file=/components/MultiStepProgressBar.css:0-291
 */

const MultiStepProgressBar = props => {
    var stepPercentage = 0;

    if (props.currentStep === 1) {
        stepPercentage = 0;
    } else if (props.currentStep === 2) {
        stepPercentage = 33.4;
    } else if (props.currentStep === 3) {
        stepPercentage = 66.7;
    } else if (props.currentStep === 4) {
        stepPercentage = 100;
    } else {
        stepPercentage = 0;
    }

    return (
        <ProgressBar percent={stepPercentage}>
            <Step>
                {({ accomplished, index }) => (
                    <div
                        className={`indexedStep ${accomplished ? "accomplished" : null}`}
                    >
                        {index + 1}
                    </div>
                )}
            </Step>
            <Step>
                {({ accomplished, index }) => (
                    <div
                        className={`indexedStep ${accomplished ? "accomplished" : null}`}
                    >
                        {index + 1}
                    </div>
                )}
            </Step>
            <Step>
                {({ accomplished, index }) => (
                    <div
                        className={`indexedStep ${accomplished ? "accomplished" : null}`}
                    >
                        {index + 1}
                    </div>
                )}
            </Step>
            <Step>
                {({ accomplished, index }) => (
                    <div
                        className={`indexedStep ${accomplished ? "accomplished" : null}`}
                    >
                        {index + 1}
                    </div>
                )}
            </Step>
        </ProgressBar>
    );
};

export default MultiStepProgressBar;
