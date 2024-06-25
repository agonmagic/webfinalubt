
function verify() {
    var emri = document.getElementById('emri').value.trim();
    var ditelindja = document.getElementById('ditelindja').value.trim();
    var gjinia = document.getElementById('gjinia').value;
    var city = document.getElementById('city').value;
    var email = document.getElementById('email').value.trim();

    if (!emri || !ditelindja || !email) {
        alert('Ju lutemi plotësoni të gjitha fushat.');
        return false;
    }

    if (gjinia === "" || city === "") {
        alert('Ju lutemi zgjedhni gjinine dhe qytetin.');
        return false;
    }
    alert('U regjistruat me sukses. Pritni kontaktet tona rreth fillimit te kursit!');
    return true;
}