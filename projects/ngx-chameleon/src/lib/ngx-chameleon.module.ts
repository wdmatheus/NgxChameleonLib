import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TooltipDirective } from './directives/tooltip.directive';
import { SlideDirective } from './directives/slide.directive';
import { DropdownSelect } from './directives/dropdown-select.directive';
import { AlertComponent } from './components/alert/alert.component';
import { ModalComponent } from './components/modal/modal.component';
import { SideBarLinkComponent } from './components/side-bar/side-bar-link/side-bar-link.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { SideBarMenuComponent } from './components/side-bar/side-bar-menu/side-bar-menu.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { TopBarBreadcrumbComponent } from './components/top-bar/top-bar-breadcrumb/top-bar-breadcrumb.component';
import { TopBarMenuComponent } from './components/top-bar/top-bar-menu/top-bar-menu.component';
import { SearchFormComponent } from './components/search-form/search-form.component';
import { GridColumnComponent } from './components/grid-column/grid-column.component';
import { HDividerComponent } from './components/hdivider/hdivider.component';
import { TransictionFadeComponent } from './components/transiction-fade/transiction-fade.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { PointingLabelComponent } from './components/pointing-label/pointing-label.component';
import { AccordionComponent } from './components/accordion/accordion.component';
import { AccordionContentComponent } from './components/accordion/accordion-content/accordion-content.component';
import { AccordionTitleComponent } from './components/accordion/accordion-title/accordion-title.component';
import { EmbedComponent } from './components/embed/embed.component';
import { GridRowComponent } from './components/grid-row/grid-row.component';
import { DpBtnComponent } from './components/dp-btn/dp-btn.component';
import { ThSortDirective } from './directives/th-sort.directive';


@NgModule({
    declarations: [
        SlideDirective,
        DropdownSelect,
        TooltipDirective,
        ThSortDirective,
        AlertComponent,
        ModalComponent,
        SideBarLinkComponent,
        SideBarComponent,
        SideBarMenuComponent,
        TopBarComponent,
        TopBarBreadcrumbComponent,
        TopBarMenuComponent,
        SearchFormComponent,
        GridRowComponent,
        GridColumnComponent,
        HDividerComponent,
        TransictionFadeComponent,
        DialogComponent,
        PointingLabelComponent,
        AccordionComponent,
        AccordionContentComponent,
        AccordionTitleComponent,
        EmbedComponent,
        DpBtnComponent,
    ],
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [
        SlideDirective,
        DropdownSelect,
        TooltipDirective,
        ThSortDirective,
        AlertComponent,
        ModalComponent,
        SideBarLinkComponent,
        SideBarComponent,
        SideBarMenuComponent,
        TopBarComponent,
        TopBarBreadcrumbComponent,
        TopBarMenuComponent,
        SearchFormComponent,
        GridRowComponent,
        GridColumnComponent,
        HDividerComponent,
        TransictionFadeComponent,
        DialogComponent,
        PointingLabelComponent,
        AccordionComponent,
        AccordionContentComponent,
        AccordionTitleComponent,
        EmbedComponent,
        DpBtnComponent
    ]
})
export class NgxChameleonModule {

}
