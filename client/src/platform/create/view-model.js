export default class OrderMainViewModel {
    id;
    name;
    description;
    mainImage;
    address;
    time;
    telephone;
    payment;

    errors = {
        name: false,
        description: false,
        address: false,
        payment: false
    };

    constructor(data) {
        if (data) {
            this.id = data.id;
            this.name = data.name;
            this.description = data.description;
            this.mainImage = data.mainImage;
            this.address = data.address;
            this.time = data.time;
            this.telephone = data.telephone;
            this.payment = data.payment;
        }
    }

    getBaseModel = () => {
        return {
            id: this.id,
            name: this.name,
            description: this.description,
            mainImage: this.mainImage,
            address: this.address,
            time: this.time,
            telephone: this.telephone,
            payment: this.payment,
        }
    }

    validate = () => {
        let isValid = true;

        const errorsMessages = [];

        const ERRORS = {
            name: false,
            description: false,
            address: false,
            payment: false
        };

        if (!this.name) {
            errorsMessages.push('name is not valid');
            ERRORS.name = true;
            isValid = false;
        }

        if (!this.description) {
            errorsMessages.push('description is not valid');
            ERRORS.description = true;
            isValid = false;
        }
        if (!this.address) {
            errorsMessages.push('address is not valid');
            ERRORS.address = true;
            isValid = false;
        }
        if (!this.payment) {
            errorsMessages.push('name is not valid');
            ERRORS.payment = true;
            isValid = false;
        }

        this.errors = ERRORS;
        return isValid;
    }
}
