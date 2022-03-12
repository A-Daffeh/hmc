/**
 * account.js
 * 
 * @author adama
 * @since 2022-03-11
 */
 "use strict";

 export class Patient {
    #patientId = null;
    #firstName = null;
    #middleName = null;
    #lastName = null;
    #dateOfBirth = null;
    #department = null;
    #outPatient = null;

    constructor(patientId, firstName, middleName, lastName, dateOfBirth, department, outPatient) {
        this.#patientId = patientId;
        this.#firstName = firstName;
        this.#middleName = middleName;
        this.#lastName = lastName;
        this.#dateOfBirth = dateOfBirth;
        this.#department = department;
        this.#outPatient = outPatient;
    }

    getPatientId() { return this.#patientId; }
    getFirstName() { return this.#firstName; }
    getMiddleName() { return this.#middleName; }
    getLastName() { return this.#lastName; }
    getDateOfBirth() { return this.#dateOfBirth; }
    getDepartment() { return this.#department; }
    getOutPatient() { return this.#outPatient; }

    setPatientId(patientId) {
        this.#patientId = patientId;
    }
    setFirstName(firstName) {
        this.#firstName = firstName;
    }
    setMiddleName(middleName) {
        this.#middleName = middleName;
    }
    setLastName(lastName) {
        this.#lastName = lastName;
    }
    setDateOfBirth(dateOfBirth) {
        this.#dateOfBirth = dateOfBirth;
    }
    setDepartment(department) {
        this.#department = department;
    }
    setOutPatient(outPatient) {
        this.#outPatient = outPatient;
    }

    // toString() {
    //     return `{AccountNo: ${this.#accountNo}, CustomerName: ${this.#customerName}, AccountType: ${this.#accountType}}`;
    // }
}