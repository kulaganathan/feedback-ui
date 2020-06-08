export class Questionnaire {

    constructor(
        public companyName: string,
        public interviewDate: string,
        public isDefault: boolean,
        public position?: string
    ) { }

}
