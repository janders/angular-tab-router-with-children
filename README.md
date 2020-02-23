# Angular Tab Router With Children

This project was originally a clone of
[nirajsonawane/angular-material-tab-router](https://github.com/nirajsonawane/angular-material-tab-router) but highly modified to include a child component (home) that uses ```mat-tab-nav-bar``` instead of the root app module. I also upgraded the project to use Angular and Material 8.2.

## Getting Started

Clone or Download the project then run:

```bash
npm install

npm start
```

Open up your favorite browser and go to [localhost:4200](http://localhost:4200). Note, you will automatically be routed to [localhost:4200/notes/list](http://localhost:4200/notes/list).

## Project Structure

This project uses ```mat-tab-nav-bar``` in the ```home module``` to create a set of navigation tabs called **Notes**, **Photos** and **Documents**.

The ```note module\component``` includes an additional set of child components to simulate additional functionality. Those are:

- note-delete.component
- note-detail.component
- note-edit.component
- note-list.component

Each child component is lazy loaded using the following syntax:

app-routing.module.ts

```typescript
{
    path: '',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
}
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
