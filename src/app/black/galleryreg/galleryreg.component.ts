import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminserviceService } from 'src/app/admin/adminservice.service';
import { BlackService } from '../black.service';

@Component({
  selector: 'app-galleryreg',
  templateUrl: './galleryreg.component.html',
  styleUrls: ['./galleryreg.component.scss']
})
export class GalleryregComponent implements OnInit {
  choosenFile: any
  choosenFile1: any
  choosenFile2: any
  choosenFile3: any
  choosenFile4: any
  choosenFile5: any
  Galleryform: any
  black_id: any
  public loading = false;
  Gallerylist: any[] = []
  constructor(private register: BlackService, private adminserv: AdminserviceService, private router: Router, private fb: FormBuilder,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.Galleryform = this.fb.group({
      Image: '',
      Image1: '',
      Image2: '',
      Image3: '',
      Image4: '',
      Image5: '',
      blacksmith_id: localStorage.getItem("BlacksmithId")
    });
    this.black_id = localStorage.getItem("BlacksmithId")
    this.register.getGalleryByBlack(this.black_id)
      .subscribe(res => {
        console.log(res)
        this.Gallerylist = res;

        console.log(this.Gallerylist.length)
        if (this.Gallerylist.length > 0) {
          console.log(this.Gallerylist[0].Galleryid)
        }
        else {
          console.log("not in here")
        }
      })
  }
  handleFileInput(event: any) {
    console.log(event.target.files[0])
    this.choosenFile = event.target.files[0]
  }
  handleFileInput1(event: any) {
    console.log(event.target.files[0])
    this.choosenFile1 = event.target.files[0]
  }
  handleFileInput2(event: any) {
    console.log(event.target.files[0])
    this.choosenFile2 = event.target.files[0]
  }
  handleFileInput3(event: any) {
    console.log(event.target.files[0])
    this.choosenFile3 = event.target.files[0]
  }
  handleFileInput4(event: any) {
    console.log(event.target.files[0])
    this.choosenFile4 = event.target.files[0]
  }
  handleFileInput5(event: any) {
    console.log(event.target.files[0])
    this.choosenFile5 = event.target.files[0]
  }
  submit() {
    this.loading = true;
    this.register.upload(this.choosenFile).then(url => {
      if (url) {
        this.Galleryform.patchValue({
          Image: url
        })
        this.register.upload(this.choosenFile1).then(url => {
          if (url) {
            this.Galleryform.patchValue({
              Image1: url
            })
            this.register.upload(this.choosenFile2).then(url => {
              if (url) {
                this.Galleryform.patchValue({
                  Image2: url
                })
                this.register.upload(this.choosenFile3).then(url => {
                  if (url) {
                    this.Galleryform.patchValue({
                      Image3: url
                    })
                    this.register.upload(this.choosenFile4).then(url => {
                      if (url) {
                        this.Galleryform.patchValue({
                          Image4: url
                        })
                        this.register.upload(this.choosenFile5).then(url => {
                          if (url) {
                            this.Galleryform.patchValue({
                              Image5: url
                            })
                            if (this.Gallerylist.length > 0) {
                              this.register.updategallery(this.Gallerylist[0].Galleryid, this.Galleryform.value).then(() => {
                                this.loading = false;
                                this.router.navigate(["/Galleryreg"]);
                              });
                            }
                            else {
                              this.register.Addgallery(this.Galleryform.value).then(() => {
                                this.loading = false;
                                this.router.navigate(["/Galleryreg"]);
                              });
                            }
                          }
                        })
                      }
                    })
                  }
                })
              }
            })
          }
        })
      } else {
        alert("image upload error")
      }

    })

      .catch(err => {
        this.loading = false;
        console.log(err)
      })
  }
}
