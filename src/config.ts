interface IStatusCodes {
    SUCCESS: number;
    BAD_REQUEST: number;
    SERVER_ERROR: number;
}

interface IConfig {
    PORT: number;
    STATUS_CODES: IStatusCodes;
}

const CONFIG: IConfig = {
    PORT: +process.env.PORT || 3000,
    STATUS_CODES: {
        SUCCESS: 200,
        BAD_REQUEST: 400,
        SERVER_ERROR: 500
    }
};

export default CONFIG;