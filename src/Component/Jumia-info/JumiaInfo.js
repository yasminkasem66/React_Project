import React from 'react';
import './Jumia-info.scss';
import { useTranslation } from 'react-i18next'

export default function JumiaInfo() {
  const { t, i18n } = useTranslation();

    return (
      <div>
        <section className="p-5 ">
          <div className="container card p-4 text-start">
            <div className="row ">
              <section className=" HomePage-img px-2 ">
                <div className="row  ">
                <h2 className="info-heading">
                  <strong
                    >
                      {/* Jumia Egypt &ndash; Biggest Online Shopping Website */}
                      {t("Et1")}
                    
                    </strong>
                </h2>

                <p  className="desc"> 
                  Online shopping sites are now part of our everyday lives,
                  because everyone enjoys the possibility of being able to buy
                  whatever they need, whether it&rsquo;s clothing or 
                  <a  className="black-link" href="https://www.jumia.com.eg/electronics/"
                    ><strong> electronics </strong></a
                  >, without having to move an inch. It&rsquo;s even better when
                  you can buy everything you&rsquo;re looking for, all from the
                  same store. This is what Jumia Egypt offers and that&rsquo;s
                  what makes it one of the best online shopping websites in
                  Egypt.
                </p>

                <h2 className="info-heading"><strong> Enjoy Endless Deals &amp; Discounts </strong></h2>

                <p  className="desc">
                  Jumia is an easy platform to use when you&rsquo;re online
                  shopping for any type of products you&rsquo;re looking for.
                  Even if you&rsquo;re just browsing, we assure you that you
                  will find something you like in our catalog. Our
                  <strong> clothing store </strong> provides you with over one
                  million products and variations to choose from! You can shop
                  for anything you need from women fashion to baby clothes and
                  get the latest
                  <a  className="black-link" href="https://www.jumia.com.eg/category-fashion-by-jumia/"
                    ><strong> fashion </strong></a>.
                     Jumia Egypt is one of the biggest online shopping sites
                  because we always try to expand our catalog to provide any
                  possible products or gadgets our customer could be searching
                  to buy online!
                </p>

                <h2 className="info-heading"><strong>Shop Now for All Products Online</strong></h2>

                <h2 className="info-heading">
                  <strong>Order Electronics &amp; Appliances Here</strong>
                </h2>

                <p  className="desc">
                  Check off your <strong> grocery </strong> list with our
                  <a  className="black-link" href="https://www.jumia.com.eg/groceries/"
                    ><strong> online supermarket </strong></a>
                  which is filled with all the canned goods and fresh foods you
                  could possibly think of. You can easily shop for all
                  variations of
                  <a className="black-link" href="https://www.jumia.com.eg/home-office-appliances/"
                    ><strong> appliances </strong></a>
                  for your home from a large selection which include appliances
                  such as a
                  <a className="black-link"
                    href="https://www.jumia.com.eg/appliances-fridges-freezers/"
                    ><strong> fridge </strong></a>, washing machine or
                  <a  className="black-link" href="https://www.jumia.com.eg/air-conditioning/"
                    ><strong> air conditioner </strong></a>, for example.
                </p>

                <p  className="desc">
                  Our catalog for electronics offers you the highest quality
                  products from trusted sellers and brands; you can show for a
                  new
                  <a  className="black-link" href="https://www.jumia.com.eg/televisions/"
                    ><strong> television </strong></a>
                  for your living room, your favorite
                  <a className="black-link" href="https://www.jumia.com.eg/smartphones/"
                    ><strong> smartphone </strong></a>
                  or even a new
                  <a className="black-link"  href="https://www.jumia.com.eg/playstation4-consoles/"
                    ><strong> PlayStation 4 </strong></a
                  >or<a className="black-link" href="https://www.jumia.com.eg/5/"
                    ><strong> PS5 </strong></a
                  >, for example. Get the latest releases of
                  <strong> mobiles and tablets </strong> before anyone else in
                  town, whether you want to buy a new phone from
                  <a className="black-link" href="https://www.jumia.com.eg/phones-tablets/apple/"
                    ><strong> Apple </strong></a
                  >, Infinix, Xiaomi, Realme or
                  <a className="black-link" href="https://www.jumia.com.eg/phones-tablets/samsung/"
                    ><strong> Samsung </strong></a
                  >, for example. Another amazing category available is one
                  dedicated to computers,
                  <a  className="black-link" href="https://www.jumia.com.eg/laptops/"
                    ><strong> laptops </strong></a
                  >
                  and all their accessories. Shop for
                  <a className="black-link"  href="https://www.jumia.com.eg/printers/"
                    ><strong> printers </strong></a
                  >, scanners, computer components and monitors to enhance your
                  computer or laptop experience to the max! All these products
                  are provided in <strong> Jumia Egypt </strong> for you to
                  discover and buy, and enjoy the fastest delivery anywhere in
                  Egypt.
                </p>

                <h2 className="info-heading">
                  <strong>Indulge in a Selection of Beauty Products</strong>
                </h2>

                <p  className="desc">
                  Our onlinestore also offers you the best beauty products from
                  world-wide known brands. Anything related to
                  <a  className="black-link" href="https://www.jumia.com.eg/health-beauty/"
                    ><strong> health and beauty </strong></a
                  >, cosmetics and
                  <a className="black-link"  href="https://www.jumia.com.eg/fragrances-allgenders/"
                    ><strong> fragrances </strong></a
                  >
                  can be found at our online store. Discover our
                  <a  className="black-link" href="https://www.jumia.com.eg/baby-products/"
                    ><strong> baby shop </strong></a
                  >
                  for all baby essentials from food and diapers to toys and
                  education games. Start online shopping for furniture and home
                  d &eacute;cor for each and every room in your house.
                </p>

                <p>
                  Order our
                  <a className="black-link"
                    href="https://www.jumia.com.eg/all-products/?shop_premium_services=shop_express"
                    ><strong> Jumia Express </strong></a
                  >
                  products, which are stocked in Jumia&rsquo;s warehouse, which
                  means you will enjoy express shipping and have your products
                  delivered to you in no time! There are endless categories and
                  subcategories of products available to help you reach the
                  products you &rsquo;re looking for at
                  <strong> Jumia Egypt </strong>. Also, many of our products are
                  shipped from overseas under the
                  <a className="black-link" href="https://www.jumia.com.eg/mlp-jumia-global/"
                    ><strong> Jumia Global </strong></a
                  >
                  catalog, which will all be shipped to your doorstep, wherever
                  you are.
                </p>

                <h2 className="info-heading"><strong>Discover the Online Shopping World</strong></h2>

                <p  className="desc">
                  Jumia Egypt offers <strong> deals and discounts </strong> and
                  never ceases to form campaigns all year around, all for the
                  satisfaction and joy of our customers. Our newsletter
                  subscribers and Facebook fans get to know all of our offers
                  before anyone else such as Mobile &amp; Tech Week, Ramadan,
                  Jumia Anniversary,
                  <a  className="black-link" href="https://www.jumia.com.eg/mlp-black-friday/"
                    >Black Friday</a
                  >
                  &amp;
                  <a className="black-link" href="https://www.jumia.com.eg/mlp-mother-day/"
                    ><strong> Mother&#39;s Day </strong></a
                  >
                  Also, You can buy tickets for concerts and important events
                  online @ Jumia. We have a dedicated team who will answer your
                  questions instantly on social media and customer service is
                  available through the week to help solve any issues and answer
                  all inquiries, simply reach us as <strong> 19586 </strong>.
                  Moreover, you can join Jumia&rsquo;s partnership team to open
                  your shop on Jumia Egypt and sell your products to our
                  customers. Jumia Egypt promises to provide you with the best
                  service and <strong> 100% genuine </strong> products. We deliver
                  your order at your doorstep as fast as possible, offer you
                  safe and secure payments and also provide free returns, which
                  you can read more about in our refund and return policy. Stay
                  tuned and get the best prices in Egypt on all your favorite
                  products!
                </p>

                <p  className="desc">
                  <a  className="black-link" href="https://www.jumia.com.eg/mlp-stay-safe/"
                    ><strong>Stay safe</strong></a
                  >
                  and
                  <a  className="black-link" href="https://www.jumia.com.eg/stay-comfy/"
                    ><strong> stay comfy </strong></a
                  >
                  and learning about COVID-19 facts.
                  <strong> Stay home </strong> and shop for all your
                  <a  className="black-link" href="https://www.jumia.com.eg/supermarket-deals/"
                    > <strong>home essentials</strong> </a
                  >
                  and we will have it delivered to your doorstep as soon as
                  possible with 
                   <a  className="black-link" href="https://www.jumia.com.eg/contactless-delivery/"
                    > <strong>contactless delivery </strong></a
                  >.
                </p>
                </div>
              </section>
            </div>
          </div>
        </section>
      </div>
    );
}


