class Dialog {
    constructor(id ,opition) {
        this.locationEle = document.getElementById(id);
        this.opition = opition;
        this.init();
    }
    init() {
        this.createHtml();
        this.bindEvent();
    }
    createHtml() {
        this.dialogEle = document.createElement('div');
        this.dialogEle.innerHTML =
            `<div class="dialogTitle">
                     <p>Basic dialog</p>
                     <div class="cancelBtn">×</div>
                     <button class="deleteBtn">删除</button>
            </div>`
        this.dialogEle.classList.add("dialogEle");
    }
    bindEvent() {
          const closeBtnEle = this.dialogEle.querySelector('.cancelBtn');
          closeBtnEle.addEventListener('click',() => {
              this.close();
          },false);

          const deleteBtn = this.dialogEle.querySelector('.deleteBtn');
          deleteBtn.addEventListener('click',() => {
              this.destory();
          })
    }
    open() {
        this.opition.beforeOpen && this.opition.beforeOpen();
        if(this.locationEle.innerHTML) {
            this.dialogEle.style.display = 'block';
        } else {
            this.locationEle.appendChild(this.dialogEle);
        }
    }
    close() {
          this.dialogEle.style.display = 'none';
    }
    destory() {
          this.locationEle.removeChild(this.dialogEle);
    }
}

window.onload = function () {
    var d = new Dialog('dialog1', {beforeOpen: () => {alert('before open')}});

    var dialogOpen = document.getElementsByClassName('dialogOpen')[0];
    dialogOpen.addEventListener('click',() => {
        d.open();
    })
}

