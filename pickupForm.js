const db = firebaseapp.firestore();

function pickupSubmit() {
         
    
    const first_name = document.getElementById("first_name").value;
    const last_name = document.getElementById("last_name").value;
    const contact = document.getElementById("contact").value;
    const state = document.getElementById("state").value;
    const slot = document.getElementById("slot").value;
    const category = document.getElementById("category").value;
    const area = document.getElementById("area").value;
    const city = document.getElementById("city").value;
    const pincode = document.getElementById("pincode").value;
    const email = document.getElementById("email").value;

    const pickUpFormref = db.collection('pickup');

    pickUpFormref.add({
        first_name: first_name,
        last_name: last_name,
        contact: contact,
        state: state,
        slot: slot,
        category: category,
        area: area,
        city: city,
        pincode: pincode,
        email: email
    });
    
}
