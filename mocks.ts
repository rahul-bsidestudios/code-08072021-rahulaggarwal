export const VALID_BMI_REQUEST_BODY = [
	{
		Gender: "Male",
		HeightCm: 171,
		WeightKg: 96
	},
	{
		Gender: "Male",
		HeightCm: 161,
		WeightKg: 85
	},
	{
		Gender: "Male",
		HeightCm: 180,
		WeightKg: 77
	}
];

export const VALID_BMI_REQUEST_RESPONSE = {
	results: [
		{
			Gender: "Male",
			HeightCm: 171,
			WeightKg: 96,
			BMI: 32.83,
			BMICategory: "Moderately obese",
	        HealthRisk: "Medium risk"
		},
		{
			Gender: "Male",
			HeightCm: 161,
			WeightKg: 85,
			BMI: 32.79,
	        BMICategory: "Moderately obese",
	        HealthRisk: "Medium risk",
		},
		{
			Gender: "Male",
			HeightCm: 180,
			WeightKg: 77,
			BMI: 23.77,
	        BMICategory: "Normal weight",
	        HealthRisk: "Low risk"
		}
	],
	overweightCount: 0
}