function getData(){
    return {
        name: document.getElementById("name").value,
        phone: document.getElementById("phone").value,
        message: document.getElementById("message").value
    };
}

function sendWhatsApp(){
    let d = getData();
    let url = `https://wa.me/27642919982?text=Hi PH Painters,%0AName: ${d.name}%0APhone: ${d.phone}%0AJob: ${d.message}`;
    window.open(url, "_blank");
}

function callNow(){
    window.location.href = "tel:+27642919982";
}

function sendEmail(){
    let d = getData();
    let subject = "Quote Request";
    let body = `Name: ${d.name}\nPhone: ${d.phone}\nMessage: ${d.message}`;
    window.location.href = `mailto:pepshove@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

function sendSMS(){
    let d = getData();
    let sms = `Hi PH Painters, ${d.message}`;
    window.location.href = `sms:+27642919982?body=${encodeURIComponent(sms)}`;
}