module.exports = function generateCardHTML(empl) {
  let html =`
  <div class="card">
    <div class="card-header-${empl.getRole()}">
      ${empl.getRole()}
    </div>
    <div class="card-body">
      <h5 class="card-title"> ${empl.getName()}</h5>
      <p> ${empl.getEmail()}</p>
      <p> ${empl.getSpecial()}</p>
      <div class="text-muted"> Employee Id: ${empl.getId()} </div>
    </div>
  </div>
  `;

  return html;
};