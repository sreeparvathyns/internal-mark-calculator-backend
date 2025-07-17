const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/internalmark", (request, response) => {
    const getName = request.body.name;
    const getAdmissionNo = request.body.admno;
    const getSubject = request.body.subject;

    const getPDay = parseInt(request.body.pdays);
    const getTDay = parseInt(request.body.tdays);
    const gDays = (getPDay / getTDay) * 8;

    const getMark1 = parseInt(request.body.getMark1);
    const getTmark1 = parseInt(request.body.getTmark);
    const gMark1 = (getMark1 / getTmark1) * 10;

    const getMark2 = parseInt(request.body.getMark2);
    const getTMark2 = parseInt(request.body.getTMark2);
    const gMark2 = (getMark2 / getTMark2) * 10;

    const getAMark1 = parseInt(request.body.getAMark1);
    const getAMark2 = parseInt(request.body.getAMark2);
    const amark = getAMark1 + getAMark2

    const total =  gMark1 + gMark2 + amark;

    response.json({
        name: getName,
        admissionNo: getAdmissionNo,
        subject: getSubject,
        "Internal Mark": total
    });
});

app.listen(4000, () => {
    console.log("server is running on port 4000");
});
