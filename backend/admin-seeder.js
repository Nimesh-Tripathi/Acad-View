const adminDetails = require("./models/Admin/details.model.js");
const adminCredential = require("./models/Admin/credential.model.js");
const connectToMongo = require("./database/db.js");
const mongoose = require("mongoose");

const seedData = async () => {
    try {
        await connectToMongo();

        await adminCredential.deleteMany({})
        await adminDetails.deleteMany({})

        await adminCredential.create({
            loginid: 123456,
            password: "admin123"
        });

        const adminDetail = {
            employeeId: "123456",
            firstName: "Achal",
            middleName: "",
            lastName: "Kaushik",
            email: "achalKaushik@gmail.com",
            phoneNumber: "9868474952",
            gender: "Male",
            type: "Admin",
            profile: "Faculty_Profile_123456.png",
        };

        await adminDetails.create(adminDetail);

        console.log("Seeding completed successfully!");
    } catch (error) {
        console.error("Error while seeding:", error);
    } finally {
        await mongoose.connection.close();
        process.exit();
    }
};

seedData();
