# NgxChameleon

Chameleon module for Angular

## Instaling

```
npm install ngx-chameleon jquery --save
```
### Download Semanti UI and Chameleon files

1. Create the **libs/images**, **libs/css** and **libs/js** folders in  project root.
2. Download [Semanti UI](https://github.com/Semantic-Org/Semantic-UI-CSS/archive/master.zip).
3. Copy **semantic.min.css** file to **libs/css** folder.
4. Copy **components** and **themes** folders **libs/css** folder.
5. Copy **semantic.min.js** file to **libs/js** folder.
6. Download [Chameleon](http://docs.chameleon.nexaas.com/download-here.html).
7. Copy **chameleon.min.css** file to **libs/css** folder.
8. Copy **chameleon.min.js** file to **libs/js** folder.
9. Create some image with the name **bg_app.jpg** in the **libs/images** folder (chameleon css references this image, this step is necessary to avoid angular compilation errors).

### Add Jquery Semanti UI and Chameleon in angular.json

```json
"styles": [
  "libs/css/semantic.min.css",
  "libs/css/chameleon.min.css",
  "src/styles.css"
],
"scripts": [
  "node_modules/jquery/dist/jquery.min.js",
  "libs/js/semantic.min.js",
  "libs/js/chameleon.min.js"
]
```

## Usage

### Import NgxChameleonModule in your AppModule

```typescript

import { NgxChameleonModule } from 'ngx-chameleon';

@NgModule({
  imports:[
      NgxChameleonModule
  ],
  bootstrap: [AppComponent]
})
```

### Use Side and Top Bar

```html
<div class="ch-loader-progress"></div>
<div ch-side-bar app-name="NgxChameleon" logo-url="assets/logo.png">
  <ch-side-bar-menu>

    <ch-side-bar-link [route]="['/home']" icon="fal fa-home fa-icon" description="Home">
    </ch-side-bar-link>
    <ch-side-bar-link [route]="['/account']" icon="fas fa-id-card-alt fa-icon" description="Account">
    </ch-side-bar-link>

  </ch-side-bar-menu>
</div>

<div class="ch-content">

  <header ch-top-bar>
    <ch-top-bar-menu>

      <button class="ch-header-nav-button" (click)="dialogAccounts.open()">
        Select an account
        <i class="ch-notification-label fal fa-chevron-down fa-icon dropdown"></i>
      </button>

      <div class="ch-header-nav-button ch-dropdown ch-user" href="#">
        <button class="ch-avatar ch-dropdown-toggle" type="button">
          <img class="ui avatar image" src="assets/avatar.png" />
        </button>
        <div class="ch-dropdown-content bottom right" tabindex="-1">
          <div class="ch-user-container">
            <div class="ch-user-header">
              <img class="avatar" src="assets/avatar.png">
              <div class="info"><strong class="name">Void</strong>
                <div class="email">void@gmail.com</div>
              </div>
            </div>
            <div class="ch-user-action">
              <a [href]="" target="_blank">
                <i class="fal fa-user fa-icon"></i>
                <span class="label">My profile</span>
              </a>
            </div>
            <div class="ch-user-action">
              <a [href]="">
                <i class="fal fa-sign-out fa-icon"></i>
                <span class="label">
                  Logout
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </ch-top-bar-menu>

  </header>

  <div class="ui padded grid stackable">
    <div class="main-content">
      <router-outlet></router-outlet>
    </div>
  </div>
</div>

<ch-dialog #dialogAccounts [title-is-html]="true" [title]="'<strong>My Accounts</strong>'">
  <div class="ui divided selection list items">
    <div class="item ch-dialog-message unread">
      <div class="content account-item">
        <h3 class="header">
          Account A
        </h3>
        <div class="description">
          <small>Some id for account A</small>
        </div>
      </div>
    </div>
    <div class="item ch-dialog-message unread">
      <div class="content account-item">
        <h3 class="header">
          Account B
        </h3>
        <div class="description">
          <small>Some id for account B</small>
        </div>
      </div>
    </div>
  </div>
</ch-dialog>
```

### Use Breadcrumb

```typescript
export class HomeComponent implements OnInit {

  constructor(
    private topBarBreadcrumbService: TopBarBreadcrumbService) { }

  ngOnInit() {
    this.topBarBreadcrumbService.emmiter.emit({
      icon: 'fal fa-home fa-icon',
      path: ['NgxChameleon', 'Home']
    });
  }
}
```

### Use Form validation

```html
<div ch-grid-row>
  <div ch-grid-column [tablet]="16" [computer]="12" [centered]="false">
    <div class="ui form" [formGroup]="form">
      <div class="three fields">
        <div class="field required" [ngClass]="{'error': form.controls.email.invalid && submited}">
          <label>E-mail</label>
          <input type="email" formControlName="email" required />
          <ch-pointing-label *ngIf="submited && form.controls.email?.errors?.required">
            E-mail is required
          </ch-pointing-label>
          <ch-pointing-label class="error" *ngIf="submited && form.controls.email?.errors?.email">
            Invalid e-mail
          </ch-pointing-label>
        </div>
        <div class="field required" [ngClass]="{'error': form.controls.name.invalid && submited}">
          <label>Name</label>
          <input type="text" formControlName="name" required />
          <ch-pointing-label *ngIf="submited && form.controls.name?.errors?.required">
            Name is required
          </ch-pointing-label>
        </div>
        <div class="field required" [ngClass]="{'error': form.controls.profile.invalid && submited}">
          <label>Profile</label>
          <select ch-dropdown-select formControlName="profile" required>
            <option *ngFor="let item of profiles" [value]="item">
              {{item}}
            </option>
          </select>
          <ch-pointing-label *ngIf="submited && form.controls.profile?.errors?.required">
            Profile is required
          </ch-pointing-label>
        </div>

      </div>
      <div class="fields">
        <div class="field">
          <div ch-slide>
            <input type="checkbox" class="hidden" formControlName="active">
            <label>
              Active
            </label>
          </div>
        </div>
      </div>
      <div>
        <button class="ui green basic button" (click)="submit()">
          <i class="fas fa-save fa-icon"></i>
          Submit
        </button>
      </div>
    </div>
  </div>

</div>
```

```typescript
form = new FormGroup({
  email: new FormControl('', Validators.compose([
    Validators.required,
    Validators.email
  ])),
  name: new FormControl('', Validators.required),
  profile: new FormControl('', Validators.required),
  active: new FormControl(false)
});

submited = false;

profiles = ['Admin', 'Collaborator']

submit(){
  this.submited = true;
  if(this.form.invalid) return;
  /*Todo form valid*/
}
```

### Use modal and alert

```html
<div ch-grid-row>
  <div ch-grid-column [tablet]="16" [computer]="16" [centered]="false">
    <div ch-divider></div>
    <h2 class="ui teal header">Modals</h2>
  </div>
</div>
<div ch-grid-row>
  <div ch-grid-column [tablet]="16" [computer]="16" [centered]="false">
    <button class="ui purple basic button m-r-20" (click)="alert()">
      Alert
    </button>
    <button class="ui teal basic button  m-r-20" (click)="confirm()">
      Confirm dialog
    </button>
    <button class="ui violet basic button  m-r-20" (click)="openModal()">
      Open modal
    </button>
  </div>

</div>

<ch-modal #modal>
  <div class="image content">
    <img src="some/image/url" alt="">
    <div class="description">
      <p>Some image description</p>
    </div>
  </div>

</ch-modal>
```

```typescript
@ViewChild('modal', { static: true }) modal: ModalComponent;

alert(msg: string = 'Some alert <b>Message</b>!') {
  this.alertService.show({
    isHtml: true,
    headerTitle: 'Attention',
    msg: msg
  })
}

confirm() {
  this.alertService.confirm({
    cancelFn: () => this.alert('You clicked No'),
    cancelText: 'No',
    confirmText: 'Yes',
    confirmFn: () => this.alert('You clicked Yes'),
    headerTitle: 'Confirm action',
    isHtml: true,
    msg: 'Do you confirm the action?'
  });
}

openModal() {
  this.modal.open({
    showCloseBtn: true,
    title: 'Modal title',
    closable: true,
    size: 'large',
    isScrolling: true
  });
}
```

### Use transictions

```html
<div ch-grid-row>
  <div ch-grid-column [tablet]="16" [computer]="16" [centered]="false">

    <ch-transiction-fade [hidden]="hiddenIfNotIsActive(views.visible)" [direction]="'left right'" class="m-t-20">

      <h2 class="ui header blue medium">Showing visible content</h2>
      <p>
        Some visible content.
      </p>

      <button class="ui orange basic button m-r-20" (click)="changeView(views.hidden)">
        Click here to show hidden content
      </button>
    </ch-transiction-fade>

    <ch-transiction-fade [hidden]="hiddenIfNotIsActive(views.hidden)" [direction]="'left right'" class="m-t-20">

      <h2 class="ui header orange medium">Showing hidden content</h2>
      <p>
        Some hidden content.
      </p>

      <button class="ui pink basic button m-r-20" (click)="changeView(views.visible)">
        Click here to hide the content above
      </button>
    </ch-transiction-fade>

  </div>

</div>
```

```typescript
views = {
  visible: 'visible',
  hidden: 'hidden'
};

currentView: string = this.views.visible;

hiddenIfNotIsActive = (view: string) => view !== this.currentView;

changeView(view: string){
  this.currentView = '';
  setTimeout(() => this.currentView = view, 300);
}
```
