# Angular Tab Router With Children

This project was originally a clone of
[nirajsonawane/angular-material-tab-router](https://github.com/nirajsonawane/angular-material-tab-router) but highly modified to include a child component (home) that uses ```mat-tab-nav-bar``` instead of the root app module. I also upgraded the project to use Angular 8.2 and Material 8.2.

## Getting Started

Clone or Download the project then run:

```bash
npm install

npm start
```

Open up your favorite browser and go to [localhost:4200](http://localhost:4200). Note, you will automatically be routed to [localhost:4200/notes/list](http://localhost:4200/notes/list).

<img src="https://raw.githubusercontent.com/janders/angular-tab-router-with-children/assets/readme.png" width="780" alt="The application UI"/>

## Project Structure

This project uses `mat-tab-nav-bar` in the `home module` to create a set of navigation tabs called **Notes**, **Photos** and **Documents**.

Unlike many Angular projects the app-routing.module.ts file is trivially simple. It looks like this:

`app-routing.module.ts`

```typescript
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
```

Creating the tabs starts by injecting a `router` into the constructor in `home.component.ts` and adding `navLinks` to hold an array of objects to represent the tabs:

```typescript
constructor(private router: Router) {
    this.navLinks = [
        {
            label: 'Notes',
            link: '/notes',
            index: 0
        }, {
            label: 'Photos',
            link: '/photos',
            index: 1
        }, {
            label: 'Documents',
            link: '/documents',
            index: 2
        },
    ];
  }
```

Add the following event listener to the `ngOnInit()` to set the `activeLinkIndex`:

```typescript
  ngOnInit(): void {
    this.router.events.subscribe((res) => {
        this.activeLinkIndex = this.navLinks.indexOf(this.navLinks.find(tab => tab.link === '.' + this.router.url));
    });
  }
```

Finally, the tabs are created within home.component.html using `<nav mat-tab-nav-bar>`:

```html
<p>
  home works!
</p>

<nav mat-tab-nav-bar>
  <a mat-tab-link
  *ngFor="let link of navLinks"
  [routerLink]="link.link"
  routerLinkActive #rla="routerLinkActive"
  [active]="rla.isActive">
 {{link.label}}
</a>
</nav>
<router-outlet></router-outlet>
```

The `note module\component` includes an additional set of child components to simulate additional functionality. Those are:

- note-delete.component
- note-detail.component
- note-edit.component
- note-list.component

Each child component is lazy loaded using the following syntax:

`loadChildren: () => import('../note/note.module').then(m => m.NoteModule)`

`home-routing.module.ts`

```typescript
import { Route } from '@angular/router';

import { HomeComponent } from './home.component';

export const HOME_ROUTE: Route = {
  path: '',
  component: HomeComponent,
  children: [
    {
      path: 'notes',
      loadChildren: () => import('../note/note.module').then(m => m.NoteModule)
    },
    {
      path: 'photos',
      loadChildren: () => import('../photo/photo.module').then(m => m.PhotoModule)
    },
    {
      path: 'documents',
      loadChildren: () => import('../document/document.module').then(m => m.DocumentModule)
    }
  ]
};
```

Angular 8 uses the above form for dynamic imports. If you are using an older version of Angular you are probably familiar with this form of import:

```typescript
  loadChildren: './home/home.module#HomeModule'
```

Following is the project's src/app directory structure:

```bash
src/app/
├── app-routing.module.ts
├── app.component.css
├── app.component.html
├── app.component.spec.ts
├── app.component.ts
├── app.module.ts
├── document
│   ├── document-routing.module.ts
│   ├── document.component.css
│   ├── document.component.html
│   ├── document.component.ts
│   └── document.module.ts
├── home
│   ├── home-routing.module.ts
│   ├── home.component.css
│   ├── home.component.html
│   ├── home.component.ts
│   ├── home.module.ts
│   └── index.ts
├── material.module.ts
├── note
│   ├── index.ts
│   ├── note-delete.component.html
│   ├── note-delete.component.ts
│   ├── note-detail.component.html
│   ├── note-detail.component.ts
│   ├── note-edit.component.html
│   ├── note-edit.component.ts
│   ├── note-list.component.html
│   ├── note-list.component.ts
│   ├── note-routing.module.ts
│   ├── note.component.css
│   ├── note.component.html
│   ├── note.component.ts
│   ├── note.module.ts
│   └── note.service.ts
└── photo
    ├── photo-routing.module.ts
    ├── photo.component.css
    ├── photo.component.html
    ├── photo.component.ts
    └── photo.module.ts
```
