import { BMI_CATEGORIES, HEALTH_RISKS } from '../constants';

/**
 * Calculate BMI
 *
 * @param {number} weight Weight in Kgs
 * @param {number} height Height in Meters
 * @return {number} bmi Calculated BMI in kg/m2
 */

export const calculateBMI = (weight: number, height: number) => {
    if (!weight || !height) {
        return 0;
    }
    const heightInCm = height / 100;
    return (weight / (heightInCm * heightInCm));
};

/**
 * Check if person is overweight
 *
 * @param {number} bmi BMI of the person
 * @return {boolean} result true or false
 */
export const checkIfOverweight = (bmi: number) => {
    return bmi >= 25;
};

/**
 * Get category and risk
 *
 * @param {number} bmi BMI
 * @return {object} category and risk Calculated category and health risk
 */

export const findCategoryAndRisk = (bmi: number) => {
    if (bmi <= 18.4) {
        return {
            risk: BMI_CATEGORIES.UNDERWEIGHT,
            category: HEALTH_RISKS.MALNUTRITION
        };
    }
    if (bmi <= 24.9) {
        return {
            risk: BMI_CATEGORIES.NORMAL,
            category: HEALTH_RISKS.LOW
        };
    }
    if (bmi <= 29.9) {
        return {
            risk: BMI_CATEGORIES.OVERWEIGHT,
            category: HEALTH_RISKS.ENHANCED
        };
    }
    if (bmi <= 34.9) {
        return {
            risk: BMI_CATEGORIES.MOD_OBESE,
            category: HEALTH_RISKS.MEDIUM
        };
    }
    if (bmi <= 39.9) {
        return {
            risk: BMI_CATEGORIES.SEV_OBESE,
            category: HEALTH_RISKS.HIGH
        };
    }
    return {
        risk: BMI_CATEGORIES.VERY_SEV_OBESE,
        category: HEALTH_RISKS.VERY_HIGH
    };
};