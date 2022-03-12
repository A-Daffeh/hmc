/**
 * minibankapp.js
 * 
 * @author adama
 * @since 2022-03-11
 */
 "use strict";

import { Patient } from "./model/patient.js";

$(document).ready(function() {
    const patientsData = [];

    $('#newPatientForm').submit(function(e) {
        e.preventDefault();
        const patientId = $('#patientIdNumber').val();
        const firstName = $('#firstName').val();
        const middleName = $('#middleInitials').val();
        const lastName = $('#lastName').val();
        const dateOfBirth = $('#dateOfBirth').val();
        const department = $('#ddlDepartment').val();
        const outPatient = $('#radioIsOutPatientYes').val();

        const newPatient = new Patient(patientId, firstName, middleName, lastName, dateOfBirth, department, outPatient);
        patientsData.push(newPatient);
        createPatient(newPatient);

        const chkElderly = document.getElementById('chkElderPatients');
        chkElderly.addEventListener('change', function(e) {
            if (e.target.checked) {
                patientsData.filter(patient => patient.getOutPatient == "Yes");
            }
        });

        const chkOutPatient = document.getElementById('chkShowOutPatients');
        chkOutPatient.addEventListener('change', function(e) {
            if (e.target.checked) {
                patientsData.filter((patient => new Date().getFullYear() - patient.getDateOfBirth().getFullYear()) >= 65);
            }
        });
    });


    function createPatient(newPatient) {
        const tblPatients = document.querySelector("#tblPatients");
        const newRow = tblPatients.insertRow(-1);
        const newCellPatientId= newRow.insertCell(0);
        const strNewRowPatientId = document.createTextNode(`${newPatient.getPatientId()}`);
        newCellPatientId.appendChild(strNewRowPatientId);
        const newCellFirstName = newRow.insertCell(1);
        const strNewRowFirstName = document.createTextNode(`${newPatient.getFirstName()}`);
        newCellFirstName.appendChild(strNewRowFirstName);
        const newCellMiddleName = newRow.insertCell(2);
        const strNewRowMiddleName = document.createTextNode(`${newPatient.getMiddleName()}`);
        newCellMiddleName.appendChild(strNewRowMiddleName);
        const newCellLastName = newRow.insertCell(3);
        const strNewRowLastName = document.createTextNode(`${newPatient.getLastName()}`);
        newCellLastName.appendChild(strNewRowLastName);
        const newCellDateOfBirth = newRow.insertCell(4);
        const strNewRowDateOfBirth = document.createTextNode(`${newPatient.getDateOfBirth()}`);
        newCellDateOfBirth.appendChild(strNewRowDateOfBirth);
        const newCellDepartment = newRow.insertCell(5);
        const strNewRowDepartment = document.createTextNode(`${newPatient.getDepartment()}`);
        newCellDepartment.appendChild(strNewRowDepartment);
        const newCellOutPatient = newRow.insertCell(6);
        const strNewRowOutPatient = document.createTextNode(`${newPatient.getOutPatient()}`);
        newCellOutPatient.appendChild(strNewRowOutPatient);
        console.log("Patient Created");
    }
});