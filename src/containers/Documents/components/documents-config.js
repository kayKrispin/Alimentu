//Schema for profile form(s)

export default [
    {            header: 'Позовна заява про стягнення аліментів',
                 validation: 'mainValidation',
        alimentu: {
            schema: [
                {id: 'courtName', title: 'Назва суду', field: 'Input'},
                {id: 'courtCity', title: 'Місто суду', field: 'Input'},
                {id: 'courtAdress', title: 'Адреса суду', field: 'Input'},
                {id: 'plaintiffFullName', title: ' Позивач П.І.Б', field: 'Input'},
                {id: 'plaintiffAdress', title: 'Адреса', field: 'Input'},
                {id: 'plaintiffPhone', title: 'Телефон', field: 'Input'},
                {id: 'm', title: 'Відповідач', field: 'Input'},
                {id: 'accusedAdress', title: 'Адресса', field: 'Input'},
                {id: 'accusedPhone', title: 'Телефон', field: 'Input'},

                {id: 'merriageCreation', placeholder: '4242 4242 4242 4242', title: 'Дата укладення шлюбу', field: 'Input'},
                {id: 'l', placeholder: 'П.І.Б', title: 'Між мною ', field: 'Input'},
                {id: 'h', placeholder: 'П.І.Б', title: 'Та Відповідачем', field: 'Input'},
                {id: 'merriageRegister', placeholder: 'РР/ЧЧ/ММ', title: 'Який був зареєстрований', field: 'Input'},
                {
                    id: 'merriageCertificate',
                    placeholder: 'Назва свідоцтва',
                    title: 'Та було видано свідоцтво',
                    field: 'Input'
                },
                {
                    id: 'fullNameOfChildren',
                    placeholder: 'П.І.Б і рік народження дитини',
                    title: 'Від якого у нас є дитина(діти)',
                    field: 'Input'
                },
                {
                    id: 'child',
                    title: 'Стан матеріальний дитини(дітей)/Cтан здоровя',
                    lox: 'lox',
                    field: 'Select',
                    marginTop: '50px',
                    options: [
                        {value: 'Задовільний', label: 'Задовійльний'},
                        {value: 'Незадовільний', label: 'Незадовільний'},
                    ],
                    defaultValue: 'ppcm',
                    searchable: false,
                },
                {
                    id: 'accuesed',
                    title: 'Стан матеріальний відповідача/Cтан здоровя',
                    field: 'Select',
                    lox: 'lox',
                    options: [
                        {value: 'Задовільний', label: 'Задовільний'},
                        {value: 'Незадовільний', label: 'Незадовільний'},

                    ],
                    defaultValue: 'ppcm',
                    searchable: false,
                },

                {
                    id: 'moneyAmount',
                    placeholder: 'Розмір коштів в гривнях',
                    title: 'Присудити кошти на утримання дитини',
                    field: 'Input'
                },
                {
                    id: 'accusedFullName',
                    placeholder: 'П.І.Б Відповідача',
                    title: 'Та стягувати їх з відповідача щомісячно ',
                    field: 'Input'
                },
                {
                    id: 'partOfSalary',
                    placeholder: 'Розмір частки/доходу',
                    title: 'В розмірі від частки заробітку/доходу',
                    field: 'Input'
                },
                {id: 'sueDateRegister', placeholder: 'РР/ЧЧ/ММ', title: 'РР/ЧЧ/ММ оформлення позову', field: 'Input'},
                {id: 'f', placeholder: 'П.І.Б позивача', title: 'Прізвище імя по-батькові', field: 'Input'},


            ]
        },
    },
    {
        header: 'Позовна заява про стягнення заборгованості по виплаті аліментів',
        validation: 'sideValidation',
        alimentu: {
         schema: [
                {
                    id: 'moneyAmount',
                    placeholder: 'Розмір коштів в гривнях',
                    title: 'Присудити кошти на утримання дитини',
                    field: 'Input'
                },


                {
                    id: 'MoneyAmount',
                    placeholder: 'Розмір коштів в гривнях',
                    title: 'Присудити кошти на утримання дитини',
                    field: 'Input'
                },

                {
                    id: 'moneyamount',
                    placeholder: 'Розмір коштів в гривнях',
                    title: 'Присудити кошти на утримання дитини',
                    field: 'Input'
                },

            ],
        }
    }
];
