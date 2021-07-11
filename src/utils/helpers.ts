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
    return parseFloat((weight / (heightInCm * heightInCm)).toFixed(2));
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
            category: BMI_CATEGORIES.UNDERWEIGHT,
            risk: HEALTH_RISKS.MALNUTRITION
        };
    }
    if (bmi <= 24.9) {
        return {
            category: BMI_CATEGORIES.NORMAL,
            risk: HEALTH_RISKS.LOW
        };
    }
    if (bmi <= 29.9) {
        return {
            category: BMI_CATEGORIES.OVERWEIGHT,
            risk: HEALTH_RISKS.ENHANCED
        };
    }
    if (bmi <= 34.9) {
        return {
            category: BMI_CATEGORIES.MOD_OBESE,
            risk: HEALTH_RISKS.MEDIUM
        };
    }
    if (bmi <= 39.9) {
        return {
            category: BMI_CATEGORIES.SEV_OBESE,
            risk: HEALTH_RISKS.HIGH
        };
    }
    return {
        category: BMI_CATEGORIES.VERY_SEV_OBESE,
        risk: HEALTH_RISKS.VERY_HIGH
    };
};