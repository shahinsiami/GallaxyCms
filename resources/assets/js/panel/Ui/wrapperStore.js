const state = {
    rightMenuItem: {
         user: {
             permission: ["administrator"],
             icon: "usersIcon",
             name: "کاربران",
             items: [
                 {
                     name: "کاربران",
                     itemsCollapse: "userMenu",
                     subItems: [
                         {
                             id: "usersForm",
                             name: "ثبت کاربران"
                         },
                         {
                             id: "userTable",
                             name: "کاربران"
                         },
                         {
                            display:'none',
                            id: "userEdit",
                            name: "ویرایش کاربر "
                        }
                     ]
                 },
                 {
                    name: "مشخصات",
                    itemsCollapse: "userInfoMenu",
                    subItems: [
                        {
                            id: "userInfoTable",
                            name: "مشخصات کاربران"
                        },
                        {
                           display:'none',
                           id: "userInfoEdit",
                           name: "ویرایش کاربر "
                       }
                    ]
                }
             ]
         },
         category: {
             permission: ["administrator"],
             icon: "categoryIcon",
             name: "مجموعه",
             items: [
                 {
                     name: "مجموعه",
                     itemsCollapse: "categoryMenu",
                     subItems: [
                         {
                             id: "categoryForm",
                             name: "ثبت مجموعه"
                         },
                         {
                             id: "categoryTable",
                             name: "مجموعه ها"
                         },
                         {
                            display:'none',
                            id: "categoryEdit",
                            name: "ویرایش مجموعه "
                        }
                     ]
                 },
                 {
                     name: "زیرمجموعه",
                     itemsCollapse: "subCategoryMenu",
                     subItems: [
                         {
                             id: "subCategoryForm",
                             name: "ثبت زیر مجموعه"
                         },
                         {
                             id: "subCategoryTable",
                             name: "زیر مجموعه ها"
                         },
                         {
                            display:'none',
                            id: "subCategoryEdit",
                            name: "ویرایش زیر مجموعه "
                        }
                     ]
                 },
                 {
                     name: "دسته",
                     itemsCollapse: "segmentMenu",
                     subItems: [
                         {
                             id: "segmentForm",
                             name: "ثبت دسته"
                         },
                         {
                             id: "segmentTable",
                             name: "دسته ها"
                         },
                         {
                            display:'none',
                            id: "segmentEdit",
                            name: "ویرایش دسته "
                        }
                     ]
                 }
             ]
         },
         article: {
             permission: ["administrator"],
             icon: "articleIcon",
             name: "محتوا",
             items: [
                 {
                     name: "محتوا",
                     itemsCollapse: "articleMenu",
                     subItems: [
                         {
                             id: "articleForm",
                             name: "ثبت محتوا"
                         },
                         {
                             id: "articleTable",
                             name: "محتوا ها"
                         },
                         {
                            display:'none',
                            id: "articleEdit",
                            name: "ویرایش محتوا "
                        }
                     ]
                 },
                 {
                     name: "زیر محتوا",
                     itemsCollapse: "articleSubMenu",
                     subItems: [
                         {
                             id: "articleSubForm",
                             name: "ثبت زیرمحتوا"
                         },
                         {
                             id: "articleSubTable",
                             name: "زیرمحتواها"
                         },
                         {
                            display:'none',
                            id: "articleSubEdit",
                            name: "ویرایش زیرمحتوا "
                        }
                     ]
                 }
             ]
         },
         website: {
             permission: ["administrator"],
             icon: "websiteIcon",
             name: "ماژول",
             items: [
                 {
                     name: "ماژول های گرافیکی",
                     itemsCollapse: "websiteGraphicalModule",
                     subItems: [
                         {
                             subSubItems: [
                                 {
                                     name: "اسلایدر",
                                     subItemsCollapse: "sliderMenu",
                                     subSubItems: [
                                         {
                                             id: "sliderForm",
                                             name: "ثبت اسلایدر "
                                         },
                                         {
                                             id: "sliderTable",
                                             name: "اسلایدرها"
                                         },
                                         {
                                            display:'none',
                                            id: "sliderEdit",
                                            name: "ویرایش اسلایدر "
                                        }
                                     ]
                                 },
                                 {
                                    name: "گالری",
                                    subItemsCollapse: "galleryMenu",
                                    subSubItems: [
                                        {
                                            id: "galleryForm",
                                            name: "ثبت تصویر "
                                        },
                                        {
                                            id: "galleryTable",
                                            name: "تصویر ها"
                                        },
                                        {
                                           display:'none',
                                           id: "galleryEdit",
                                           name: "ویرایش تصویر "
                                       }
                                    ]
                                },
                                 {
                                     name: " رديف انتخابي ",
                                     subItemsCollapse: "rowMenu",
                                     subSubItems: [
                                         {
                                             id: "rowForm",
                                             name: "ثبت ردیف انتخابی"
                                         },
                                         {
                                             id: "rowTable",
                                             name: "ردیف های انتخابی"
                                         },
                                         {
                                            display:'none',
                                            id: "rowEdit",
                                            name: "ویرایش ردیف انتخابی "
                                        }
                                     ]
                                 },
                                 {
                                     name: "رديف متني ",
                                     subItemsCollapse: "textRowMenu",
                                     subSubItems: [
                                         {
                                             id: "textRowForm",
                                             name: "ثبت ردیف متنی"
                                         },
                                         {
                                             id: "textRowTable",
                                             name: "ردیف های متنی"
                                         },
                                         {
                                            display:'none',
                                            id: "textRowEdit",
                                            name: "ویرایش ردیف متنی "
                                        }
                                     ]
                                 },
 
                                 {
                                     name: "لیست چرخشی",
                                     subItemsCollapse: "carouselMenu",
                                     subSubItems: [
                                         {
                                             id: "carouselForm",
                                             name: "ثبت لیست چرخشی"
                                         },
                                         {
                                             id: "carouselTable",
                                             name: "لیست های چرخشی"
                                         },
                                         {
                                            display:'none',
                                            id: "carouselEdit",
                                            name: "ویرایش لیست چرخشی "
                                        }
                                     ]
                                 },
 
                                 {
                                     name: "یک ستونه",
                                     subItemsCollapse: "oneColumnMenu",
                                     subSubItems: [
                                         {
                                             id: "oneColumnForm",
                                             name: "ثبت یک ستونه "
                                         },
                                         {
                                             id: "oneColumnTable",
                                             name: "یک ستونه ها "
                                         },
                                         {
                                            display:'none',
                                            id: "oneColumnEdit",
                                            name: "ویرایش یک ستونه"
                                        }
                                     ]
                                 },
 
                                 {
                                     name: "دوستونه",
                                     subItemsCollapse: "twoColumnMenu",
                                     subSubItems: [
                                         {
                                             id: "twoColumnForm",
                                             name: "ثبت دو ستونه"
                                         },
                                         {
                                             id: "twoColumnTable",
                                             name: "دو ستونه ها"
                                         },
                                         {
                                            display:'none',
                                            id: "twoColumnEdit",
                                            name: "ویرایش دو ستونه"
                                        }
                                     ]
                                 },
                                 {
                                     name: "سه ستونه",
                                     subItemsCollapse: "threeColumnMenu",
                                     subSubItems: [
                                         {
                                             id: "threeColumnForm",
                                             name: "ثبت سه ستونه"
                                         },
                                         {
                                             id: "threeColumnTable",
                                             name: "سه ستونه ها"
                                         },
                                         {
                                            display:'none',
                                            id: "threeColumnEdit",
                                            name: "ویرایش سه ستونه"
                                        }
                                     ]
                                 },
                                 {
                                     name: "چهار ستونه",
                                     subItemsCollapse: "fourColumnMenu",
                                     subSubItems: [
                                         {
                                             id: "fourColumnForm",
                                             name: "ثبت چهار ستونه "
                                         },
                                         {
                                             id: "fourColumnTable",
                                             name: "چهار ستونه ها"
                                         },
                                         {
                                            display:'none',
                                            id: "fourColumnEdit",
                                            name: "ویرایش چهار ستونه"
                                        }
                                     ]
                                 },
                                 {
                                     name: "چند ستونه",
                                     subItemsCollapse: "manyColumnMenu",
                                     subSubItems: [
                                         {
                                             id: "manyColumnForm",
                                             name: "ثبت چند ستونه"
                                         },
                                         {
                                             id: "manyColumnTable",
                                             name: "چند ستونه ها"
                                         },
                                         {
                                            display:'none',
                                            id: "manyColumnEdit",
                                            name: "ویرایش چند ستونه"
                                        }
                                     ]
                                 },
                                 {
                                     name: "چند ستونه فایلی",
                                     subItemsCollapse: "manyColumnFileMenu",
                                     subSubItems: [
                                         {
                                             id: "manyColumnFileForm",
                                             name: "ثبت ستون فایلی "
                                         },
                                         {
                                             id: "manyColumnFileTable",
                                             name: "ستون های فایلی "
                                         },
                                         {
                                            display:'none',
                                            id: "manyColumnFileEdit",
                                            name: "ویرایش ستون های فایلی"
                                        }
                                     ]
                                 },
                                 {
                                     name: " ثانيه شمار",
                                     subItemsCollapse: "flashSaleMenu",
                                     subSubItems: [
                                         {
                                             id: "flashSaleForm",
                                             name: "ثبت ثانیه شمار"
                                         },
                                         {
                                             id: "flashSaleTable",
                                             name: "ثانیه شمارها"
                                         },
                                         {
                                            display:'none',
                                            id: "flashSaleEdit",
                                            name: "ویرایش ثانیه شمار"
                                        }
                                     ]
                                 },
                                 {
                                     name: "سرتیتر",
                                     subItemsCollapse: "headerFormMenu",
                                     subSubItems: [
                                         {
                                             id: "headerForm",
                                             name: "ثبت سرتیتر"
                                         },
                                         {
                                             id: "headerTable",
                                             name: "سرتیتر ها"
                                         },
                                         {
                                            display:'none',
                                            id: "headerEdit",
                                            name: "ویرایش سرتیتر"
                                        }
                                     ]
                                 },
                                 {
                                     name: "پاورقی",
                                     subItemsCollapse: "footerFormMenu",
                                     subSubItems: [
                                         {
                                             id: "footerForm",
                                             name: "ثبت پاورقی"
                                         },
                                         {
                                             id: "footerTable",
                                             name: "پاورقی ها"
                                         },
                                         {
                                            display:'none',
                                            id: "footerEdit",
                                            name: "ویرایش پاورقی"
                                        }
                                     ]
                                 }
                             ]
                         }
                     ]
                 },
                 {
                     name: "ماژول های ارتباطی",
                     itemsCollapse: "mainModulMenu",
                     subItems: [
                         {
                             subSubItems: [
                                 {
                                     name: "شبکه اجتماعي",
                                     subItemsCollapse: "socialMediaMenu",
                                     subSubItems: [
                                         {
                                             id: "socialMediaForm",
                                             name: "ثبت شبکه اجتماعی"
                                         },
                                         {
                                             id: "socialMediaTable",
                                             name: "شبکه های اجتماعی"
                                         },
                                         {
                                            display:'none',
                                            id: "carouselEdit",
                                            name: "ویرایش شبکه اجتماعی"
                                        }
                                     ]
                                 },
                                 {
                                     name: "درباره ما",
                                     subItemsCollapse: "aboutMenu",
                                     subSubItems: [
                                         {
                                             id: "aboutForm",
                                             name: "ثبت درباره ما"
                                         },
                                         {
                                             id: "aboutTable",
                                             name: "درباره ما"
                                         },
                                         {
                                            display:'none',
                                            id: "aboutEdit",
                                            name: "ویرایش درباره ما"
                                        }
                                     ]
                                 },
                                 {
                                     name: "ارتباط با ما",
                                     subItemsCollapse: "contactMenu",
                                     subSubItems: [
                                         {
                                             id: "contactForm",
                                             name: "ثبت ارتباط با ما"
                                         },
                                         {
                                             id: "contactTable",
                                             name: "ارتباط با ما"
                                         },
                                         {
                                            display:'none',
                                            id: "contactEdit",
                                            name: "ویرایش ارتباط با ما"
                                        }
                                     ]
                                 },
                                 {
                                     name: "مشخصات",
                                     subItemsCollapse: "infoMenu",
                                     subSubItems: [
                                         {
                                             id: "infoForm",
                                             name: "ثبت مشخصات"
                                         },
                                         {
                                             id: "infoTable",
                                             name: "مشخصات"
                                         }
                                         ,
                                         {
                                            display:'none',
                                            id: "infoEdit",
                                            name: "ویرایش مشخصات"
                                        }
                                     ]
                                 }
                             ]
                         }
                     ]
                 }
             ]
         },
         crop: {
             permission: ["administrator"],
             icon: "cropIcon",
             name: "محصولات",
             items: [
                 {
                     name: "دسته بندی ",
                     itemsCollapse: "cropCategoriesMenu",
                     subItems: [
                         {
                             subSubItems: [
                                 {
                                     name: "مجموعه",
                                     subItemsCollapse: "cropCategoryMenu",
                                     subSubItems: [
                                         {
                                             id: "cropCategoryForm",
                                             name: "ثبت مجموعه محصولات"
                                         },
                                         {
                                             id: "cropCategoryTable",
                                             name: "مجموعه های محصولات"
                                         },
                                         {
                                            display:'none',
                                            id: "cropCategoryEdit",
                                            name: "ویرایش مجموعه محصولات"
                                        }
                                     ]
                                 },
                                 {
                                     name: " زیرمجموعه ",
                                     subItemsCollapse: "cropSubCategoryMenu",
                                     subSubItems: [
                                         {
                                             id: "cropSubCategoryForm",
                                             name: "ثبت زیر مجموعه محصولات"
                                         },
                                         {
                                             id: "cropSubCategoryTable",
                                             name: "زیر مجموعه های محصولات"
                                         },
                                         {
                                            display:'none',
                                            id: "cropSubCategoryEdit",
                                            name: "ویرایش زیر مجموعه های محصولات"
                                        }
                                     ]
                                 },
                                 {
                                     name: "دسته ",
                                     subItemsCollapse: "cropSegmentMenu",
                                     subSubItems: [
                                         {
                                             id: "cropSegmentForm",
                                             name: "ثبت دسته محصولات"
                                         },
                                         {
                                             id: "cropSegmentTable",
                                             name: "دسته های محصولات"
                                         },
                                         {
                                            display:'none',
                                            id: "cropSegmentEdit",
                                            name: "ویرایش دسته های محصولات"
                                        }
                                     ]
                                 },
                                 {
                                     name: "زیردسته ",
                                     subItemsCollapse: "cropSubSegmentMenu",
                                     subSubItems: [
                                         {
                                             id: "cropSubSegmentForm",
                                             name: "ثبت زیر دسته محصولات"
                                         },
                                         {
                                             id: "cropSubSegmentTable",
                                             name: "زیر دسته های محصولات"
                                         },
                                         {
                                            display:'none',
                                            id: "cropSubSegmentEdit",
                                            name: "ویرایش زیر دسته های محصولات"
                                        }
                                     ]
                                 }
                             ]
                         }
                     ]
                 },
                 {
                     name: "خصوصیات",
                     itemsCollapse: "cropDetailDescriptionMenu",
                     subItems: [
                         {
                             subSubItems: [
                                 {
                                     name: "رویداد ",
                                     subItemsCollapse: "cropEventMenu",
                                     subSubItems: [
                                         {
                                             id: "cropEventForm",
                                             name: "ثبت رخداد محصولات"
                                         },
                                         {
                                             id: "cropEventTable",
                                             name: "رخداد های محصولات"
                                         },
                                         {
                                            display:'none',
                                            id: "cropEventEdit",
                                            name: "ویرایش رخداد محصولات"
                                        }
                                     ]
                                 },
                                 {
                                     name: "خصوصیات",
                                     subItemsCollapse: "cropDetailMenu",
                                     subSubItems: [
                                         {
                                             id: "cropDetailForm",
                                             name: "ثبت خصوصیات محصولات"
                                         },
                                         {
                                             id: "cropDetailTable",
                                             name: "خصوصیات های محصولات"
                                         },
                                         {
                                            display:'none',
                                            id: "cropDetailEdit",
                                            name: "ویرایش خصوصیات محصولات"
                                        }
                                     ]
                                 }
                             ]
                         }
                     ]
                 },
                 {
                     name: "محصولات",
                     itemsCollapse: "CropsMenu",
                     subItems: [
                         {
                             subSubItems: [
                                 {
                                     name: "محصول",
                                     subItemsCollapse: "cropMenu",
                                     subSubItems: [
                                         {
                                             id: "cropForm",
                                             name: "ثبت محصولات"
                                         },
                                         {
                                             id: "cropTable",
                                             name: "محصولات"
                                         },
                                         {
                                            display:'none',
                                            id: "cropEdit",
                                            name: "ویرایش محصولات"
                                        }
                                     ]
                                 },
                                 {
                                     name: "جزییات",
                                     subItemsCollapse: "cropAttributeMenu",
                                     subSubItems: [
                                         {
                                             id: "cropAttributeForm",
                                             name: "ثبت جزییات محصولات"
                                         },
                                         {
                                             id: "cropAttributeTable",
                                             name: "جزییات محصولات"
                                         },
                                         {
                                            display:'none',
                                            id: "cropAttributeEdit",
                                            name: "ویرایش محصولات "
                                        }
                                     ]
                                 },
                                 {
                                     name: "فایل",
                                     subItemsCollapse: "cropFileMenu",
                                     subSubItems: [
                                         {
                                             id: "cropMediaForm",
                                             name: "ثبت فایل محصولات"
                                         },
                                         {
                                             id: "cropMediaTable",
                                             name: "فایل محصولات"
                                         },
                                         {
                                            display:'none',
                                            id: "cropMediaEdit",
                                            name: "ویرایش فایل محصولات"
                                        }
                                     ]
                                 },
                                 {
                                     name: "توضیحات",
                                     subItemsCollapse: "cropDescriptionMenu",
                                     subSubItems: [
                                         {
                                             id: "cropDescriptionForm",
                                             name: "ثبت توضیحات محصولات"
                                         },
                                         {
                                             id: "cropDescriptionTable",
                                             name: "توضیحات محصولات"
                                         },
                                         {
                                            display:'none',
                                            id: "cropDescriptionEdit",
                                            name: "ویرایش توضیحات محصولات"
                                        }
                                     ]
                                 }
                             ]
                         }
                     ]
                 }
             ]
         },
         discountcode: {
             permission: ["administrator"],
             icon: "discountCodeIcon",
             name: "بن تخفیف",
             items: [
                 {
                     name: "بن تخفیف",
                     itemsCollapse: "discountCodeMenu",
                     subItems: [
                         {
                             id: "discountCodeForm",
                             name: "ثبت کد تخفیف محصولات"
                         },
                         {
                             id: "discountCodeTable",
                             name: "کد تخفیف محصولات"
                         },
                         {
                            display:'none',
                            id: "discountCodeEdit",
                            name: "ویرایش کد تخفیف محصولات"
                        }
                     ]
                 }
             ]
         },
         store: {
             icon: "storeIcon",
             permission: ["administrator"],
             name: "فروشگاه",
             items: [
                 {
                     name: "تشکیل پرونده",
                     itemsCollapse: "storeEvidenceMenu",
                     subItems: [
                         {
                             id: "sellerEvidenceForm",
                             name: "ثبت پرونده"
                         },
                         {
                             id: "sellerEvidenceTable",
                             name: "ویرایش پرونده"
                         },
                         {
                             id: "sellerEvidenceConfirmTable",
                             name: " فروشگاه ها"
                         },
                         {
                            display:'none',
                            id: "sellerEvidenceEdit",
                            name: "ویرایش پرونده فروشگاه"
                        },
                        {
                           display:'none',
                           id: "sellerEvidenceConfirmForm",
                           name: "ویرایش تاییدیه فروشگاه"
                       }
                     ]
                 },
                 {
                     name: "مجوز",
                     itemsCollapse: "sellerContract",
                     subItems: [
                         {
                             id: "sellerLicenseTable",
                             name: "مجوز فروش"
                         },
                         {
                             id: "sellerPercentageTable",
                             name: "درصد فروش"
                         },
                         {
                            display:'none',
                            id: "sellerLicenseForm",
                            name: "ویرایش مجوز فروش"
                        },
                        {
                           display:'none',
                           id: "sellerPercentageEdit",
                           name: "ویرایش درصد فروش"
                       }
                     ]
                 },
                 {
                     name: "نشانی فروشگاه",
                     itemsCollapse: "sellerAddress",
                     subItems: [
                         {
                             id: "sellerAddressForm",
                             name: "ثبت نشانی فروشگاه"
                         },
                         {
                             id: "sellerAddressTable",
                             name: "نشانی های فروشگاه"
                         },
                         {
                            display:'none',
                            id: "sellerAddressEdit",
                            name: "ویرایش نشانی فروشگاه"
                        }
                     ]
                 }
             ]
         },
         contract: {
             icon: "contractIcon",
             permission: ["administrator"],
             name: "فاکتور",
             items: [
                 {
                     name: 'فاکتور',
                     itemsCollapse: 'invoiceMenu',
                     subItems: [
                        {
                            id: 'statusInvoiceTable',
                            name: 'وضعیت سفارس',
                        },
                         {
                             id: 'clientInvoiceTable',
                             name: 'فاکتور کاربر',
                         },
                         {
                             id: 'storeInvoiceTable',
                             name: 'فاکتور فروشگاه',
                         },
                         {
                            display:'none',
                            id: "statusInvoiceForm",
                            name: "تغییر وضعیت سفارش"
                        },
                        {
                            display:'none',
                            id: "clientInvoiceForm",
                            name: 'نمایش فاکتور کاربر',
                        },
                        {
                            display:'none',
                            id: "storeInvoiceForm",
                            name: 'نمایش فاکتور فروشگاه',
                        },
                        {
                            id: 'statusInvoiceTempClientTable',
                            name: 'وضعیت سفارش کاربران غیر عضو',
                        },
                        {
                            id: 'tempClientInvoiceTable',
                            name: 'فاکتور کاربران غیر عضو',
                        },
                        {
                            display:'none',
                            id: "tempClientInvoiceForm",
                            name: 'نمایش فاکتور کاربر غیر عضو',
                        },
                     ],
                 },
             ]
         },
         shopping: {
             icon: "shoppingIcon",
             permission: ["administrator"],
             name: "فروش",
             items: [
                 {
                     name: "فروش",
                     itemsCollapse: "sellerProductMenu",
                     subItems: [
                         {
                             id: "sellerProductForm",
                             name: "ثبت محصول برای فروش"
                         },
                         {
                             id: "sellerProductTable",
                             name: "محصولات در حال فروش"
                         },
                         {
                            display:'none',
                            id: "sellerProductEdit",
                            name: "ویرایش محصول در حال فروش"
                        }
                     ]
                 }
             ]
         },
         comment: {
             permission: ["administrator"],
             icon: "commentIcon",
             name: "ارتباطات",
             items: [
                 {
                     name: "نظرات",
                     itemsCollapse: "commentMenu",
                     subItems: [
                         {
                             id: "commentTable",
                             name: "محتوا"
                         }
                     ]
                 },
                 {
                     name: "استخدام",
                     itemsCollapse: "employmentMenu",
                     subItems: [
                         {
                             id: "employmentTable",
                             name: "فرم ارسالی"
                         },
                         {
                            display:'none',
                            id: "employmentView",
                            name: "مشاهده فرم استخدام"
                        }
                     ]
                 },
                 {
                     name: "انتقادات",
                     itemsCollapse: "opinionMenu",
                     subItems: [
                         {
                             id: "opinionTable",
                             name: "انتقاد و پیشنهاد"
                         },
                         {
                            display:'none',
                            id: "opinionView",
                            name: "مشاهده فرم انتقادات و پیشنهادات"
                        }
                     ]
                 },
                 
             ]
         },
         calender: {
            permission: ["administrator"],
            dontShow:"none",
            icon: "commentIcon",
            name: "تقویم",
            items: [
                {
                    name: "تقویم",
                    itemsCollapse: "clender",
                    subItems: [
                        {
                            id: "calender",
                            name: "جلالی"
                        }
                    ]
                },
                {
                    name: "پروفایل",
                    itemsCollapse: "profile",
                    subItems: [
                        {
                            id: "profile",
                            name: "پروفایل"
                        }
                    ]
                }
            ]
        },
                 
     },
     upSidePush:[]
 };
 const getters = {};
 const mutations = {
    upSidePush(state, upSidePush) {
        if (!state.upSidePush.find(obj => obj.route == upSidePush.route)){
            state.upSidePush.push(upSidePush)
        }
    },
    upSidePull(state, upSidePull) {
        let item = state.upSidePush.indexOf(
            state.upSidePush.find(obj => obj.route == upSidePull)
        );
        state.upSidePush.splice(item, 1);
    },
 };
 const actions = {
    upSidePush(context, upSidePush) {
        context.commit('upSidePush', upSidePush)
    },
    upSidePull(context, upSidePull) {
        context.commit('upSidePull', upSidePull)
    },
 };
 export default {
     state,
     mutations,
     actions,
     getters
 };
 