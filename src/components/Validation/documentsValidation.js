export const valiateFieldsMain = (signupData,required ) => {
        let fields = [];

        required.forEach((key) => {
            if (!signupData.hasOwnProperty(key.name)) {
                fields.push(key.message);
            }
        });

        return fields;
    };

