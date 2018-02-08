const button = document.createElement('button');
button.innerText = "button"
button.onclick = () => {
  System.import('./image_viewer')
}
document.body.appendChild(button);
