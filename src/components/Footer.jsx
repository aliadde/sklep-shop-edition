import React from "react";

function Footer() {
  return (
    <>
      <div class='footer-container'>
        <div class='footer-box'>
          <h3>برند های معروف</h3>
          <a href='#' id='footer-hover'>
            بازی <i class='fas fa-arrow-left'></i>
          </a>
          <a href='#' id='footer-hover'>
            پوشاک <i class='fas fa-arrow-left'></i>
          </a>
          <a href='#' id='footer-hover'>
            بهداشتی <i class='fas fa-arrow-left'></i>
          </a>
          <a href='#' id='footer-hover'>
            دیجیتال <i class='fas fa-arrow-left'></i>
          </a>
        </div>

        <div class='footer-box'>
          <h3> صفحات </h3>
          <a href='#' id='footer-hover'>
            صفحه اصلی <i class='fas fa-arrow-left'></i>
          </a>
          <a href='#' id='footer-hover'>
            درباره ما <i class='fas fa-arrow-left'></i>
          </a>
          <a href='#' id='footer-hover'>
            دسته بندی ها <i class='fas fa-arrow-left'></i>
          </a>
        </div>

        <div class='footer-box'>
          <h3>راه های ارتباطی</h3>
          <a href='#' id='footer-hover'>
            +98011655021 <i class='fas fa-phone'></i>
          </a>
          <a href='#' id='footer-hover'>
            aliadely1384@gmail.com <i class='fas fa-envelope'></i>
          </a>
          <a href='#' id='footer-hover'>
            @ali___adeli__ <i class='fab fa-instagram'></i>
          </a>
          <a href='#' id='footer-hover'>
            twitter <i class='fab fa-twitter'></i>
          </a>
        </div>
      </div>

      <div class='credit'>
        creatd by <span>ali adeli</span>
      </div>
    </>
  );
}

export default Footer;
