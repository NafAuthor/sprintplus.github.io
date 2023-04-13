function TriggerSecurity() {

    document.getElementById('pj-b-content').innerHTML = `
    <div class="mdf-b">
      <div class="mdf-t">
        Change project security
      </div>
      <div class="mdf-i">
        You are about to change the password of your project. <br>
        If no password has been set yet, your password is the password of your account. <br>
        Enter in the following inputs the password of your project, and your new password (5 characters min., no " or '), two times.
      </div>
      <div class="mdf-input">
      <input type="text" id="enter-content-0" autocomplete="off" placeholder="Project password">
      <input type="text" id="enter-content-1" autocomplete="off" placeholder="New password">
      <input type="text" id="enter-content-2" autocomplete="off" placeholder="New password">
      </div>
      <div class="mdf-button">
      <button onclick="confirmsecurity()">
        <span class="material-symbols-outlined">
        sync_saved_locally
        </span>
        Confirm
      </button>
      <button id="cancel" onclick="Cancel()">
        <span class="material-symbols-outlined">
        close
        </span>
        Cancel
      </button>
      </div>
    </div>
  `;


}

let confirmsecurity = function() {
    let p = document.getElementById('enter-content-0');
    let p1 = document.getElementById('enter-content-1');
    let p2 = document.getElementById('enter-content-2');

    let pj = JSON.parse(localStorage.getItem(`Project : ${InCharge}`));
    if (p.value==pj.password && p1.value==p2.value && p1.value.length>=5 && p2.value.length>=5 && p1.value.includes('"')!=true 
    && p1.value.includes("'")!=true && p2.value.includes('"')!=true && p2.value.includes("'")!=true) {

        pj.password=p1.value;
        console.log("SET " + p.value )
        localStorage.setItem(`Project : ${InCharge}`,JSON.stringify(pj));
        OpenFolder({id:`pj-open-${InCharge}`});
    } else {
        if (p.value!=pj.password) {
            document.getElementById(`enter-content-0`).style.borderBlockColor = "red";
        } else {
            document.getElementById(`enter-content-0`).style.borderBlockColor = "green";
        }
        if (p1.value!=p2.value || p1.value.length<5 && p2.value.length<5) {
            document.getElementById(`enter-content-1`).style.borderBlockColor = "red";
            document.getElementById(`enter-content-2`).style.borderBlockColor = "red";
        } 
    }

}