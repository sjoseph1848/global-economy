import {NgModule} from '@angular/core';
import {MatButtonModule,MatIconModule,MatFormFieldModule, MatDatepickerModule,MatNativeDateModule,MatCheckboxModule,MatSidenavModule,MatToolbarModule,MatListModule,MatCardModule,MatTabsModule} from '@angular/material';
import {MatInputModule,} from '@angular/material/input';

@NgModule({
    imports:[MatButtonModule,MatIconModule,MatInputModule,MatFormFieldModule,MatDatepickerModule,MatNativeDateModule,MatCheckboxModule,MatSidenavModule,MatToolbarModule,MatListModule,MatCardModule,MatTabsModule],
    exports:[MatButtonModule,MatIconModule,MatInputModule,MatFormFieldModule,MatDatepickerModule,MatNativeDateModule,MatCheckboxModule,MatSidenavModule,MatToolbarModule,MatListModule,MatCardModule,MatTabsModule]
})
export class MaterialModule{}