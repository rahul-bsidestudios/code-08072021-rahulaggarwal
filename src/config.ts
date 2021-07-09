interface StatusCodesType {
    SUCCESS: number;
    BAD_REQUEST: number;
    SERVER_ERROR: number;
}

interface ConfigType {
    PORT: number;
    STATUS_CODES: STATUS_CODES_TYPE;
}

const CONFIG: CONFIG_TYPE = {
    PORT: +process.env.PORT || 3000,
    STATUS_CODES: {
        SUCCESS: 200,
        BAD_REQUEST: 400,
        SERVER_ERROR: 500
    }
};

export default CONFIG;