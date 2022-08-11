import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DataService } from 'src/app/services/data-service';
import { HttpService } from 'src/app/services/http-service';
import { GlobalConstants } from 'src/app/utils/global-constants';
import { StringsEng } from 'src/app/utils/strings-eng';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.css'],
})
export class CreateProjectComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private dataService: DataService,
    private httpService: HttpService,
    private _snackbar: MatSnackBar,
    private dialogRef: MatDialogRef<CreateProjectComponent>
  ) {
    this.createProjForm = this.formBuilder.group({
      name: '',
      platform: 'ios', // change to dynamic when available
    });
  }

  createProjForm;

  ngOnInit(): void {}

  async createProjFormSubmit(formBody) {
    this.dataService.setIsLoading(true);

    let resp = await this.httpService.httpPostWithHeader(
      GlobalConstants.HTTP_CREATE_PROJ_URL,
      formBody
    );

    this.dataService.setIsLoading(false);

    if (resp.success) {
      this._snackbar.open(StringsEng.CREATE_PROJECT_SUCCESS, null, {
        duration: GlobalConstants.SNACKBAR_DURATION_MID,
      });

      // close dialog
      this.dialogRef.close();

      // go to git configs on project creation
      window.location.href = '/git-configs'
    }
  }
}
