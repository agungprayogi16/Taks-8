/** @format */

// class Testimonial {
//   #quote = "";
//   #image = "";

//   constructor(quote, image) {
//     this.#quote = quote;
//     this.#image = image;
//   }

//   get quote() {
//     return this.#quote;
//   }

//   get image() {
//     return this.#image;
//   }

//   // This is an abstract method that subclasses will implement
//   get author() {
//     throw new Error("getAuthor() method must be implemented.");
//   }

//   // This is a polymorphic method than can take any subclass of Testimonial
//   get testimonialHTML() {
//     return `
//
//         <div class="testimonial">
//         <img src="${this.image}" class="profile-testimonial" />
//         <p class="quote">
//         ${this.quote}
//         </p>
//         <p class="author">- ${this.author}</p>
//         </div>
//
//     `;
//   }
// }

// class AuthorTestimonial extends Testimonial {
//   #author = "";

//   constructor(author, quote, image) {
//     super(quote, image);
//     this.#author = author;
//   }

//   get author() {
//     return this.#author;
//   }
// }

// class CompanyTestimonial extends Testimonial {
//   #company = "";

//   constructor(author, quote, image) {
//     super(quote, image);
//     this.#company = author;
//   }

//   get author() {
//     return this.#company + " Company";
//   }
// }

// const testimonial1 = new AuthorTestimonial(
//   "anies baswedan",
//   "Jakartaaa",
//   "https://plus.unsplash.com/premium_photo-1691547067161-fc1600117827?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1933&q=80"
// );

// console.log(testimonial1.image);

// const testimonial2 = new AuthorTestimonial(
//   "handsome boy",
//   "Hitam manis",
//   "https://plus.unsplash.com/premium_photo-1687187499404-2ed3c77b3cfe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwbHVzLWZlZWR8Mjk2fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60"
// );

// const testimonial3 = new AuthorTestimonial(
//   "Bad boys",
//   "",
//   "https://plus.unsplash.com/premium_photo-1688497830977-f9ab9f958ca7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2551&q=80"
// );

// const testimonial4 = new AuthorTestimonial(
//   "Agung Purba",
//   "orang terkeren didunia",
//   "image/123.jpeg"
// );

// let testimonialData = [testimonial1, testimonial2, testimonial3, testimonial4];
// let testimonialHTML = "";

// for (let i = 0; i < testimonialData.length; i++) {
//   testimonialHTML += testimonialData[i].testimonialHTML;
// }

// document.getElementById("testimonials").innerHTML = testimonialHTML;

// mebuat testimonials menggunakan function
// jika diklick rating all akan menunujukkan semua gambar testimonials
// jika diklick rating 1 atau 2 dll nya akan menunjukkan gambar yang memiliki rating yang sesuai

const testimonialsData = [
  {
    author: "Agung Prayogi",
    quote: "Jakrta",
    image: "image/123.jpeg",
    rating: 5,
  },
  {
    author: "Amelia",
    quote: "Cantik membahana",
    image:
      "https://images.pexels.com/photos/17631073/pexels-photo-17631073/free-photo-of-wanita-berambut-pirang-topi-kedudukan.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    rating: 4,
  },
  {
    author: "Angel",
    quote: "Beautiful",
    image:
      "https://images.pexels.com/photos/17937506/pexels-photo-17937506/free-photo-of-wanita-bidang-pedesaan-kedudukan.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    rating: 3,
  },

  {
    author: "Atalia",
    quote: "Si cantik Manis",
    image:
      "https://images.pexels.com/photos/14850183/pexels-photo-14850183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    rating: 4,
  },
];

function ratingAll() {
  let ratingAllHtml = "";

  testimonialsData.forEach(function (rating) {
    ratingAllHtml += `
    <div class="testimonial">
         <img src="${rating.image}" class="profile-testimonial" />
         <p class="quote">
         ${rating.quote}
         </p>
         <p class="author">- ${rating.author}</p>
         </p>
         <p class="rating"> ${rating.rating}
         <i class="fa-solid fa-star"></i>
         </p>
     </div>
    `;
  });

  document.getElementById("testimonials").innerHTML = ratingAllHtml;
}
ratingAll();

function selectRating(rating) {
  let selectRatingHtml = "";

  const ratingFiltered = testimonialsData.filter(function (item) {
    return item.rating === rating;
  });

  if (ratingFiltered.length === 0) {
    const notFound = document.getElementById("not-found");
    notFound.style.display = "block";
    notFound.style.textAlign = "center";
    notFound.innerHTML = `<h2>Not Found</h2>`;
  } else if (ratingFiltered.length > 0) {
    const messageEmptyData = document.getElementById("not-found");
    messageEmptyData.style.display = "none";
    ratingFiltered.forEach(function (rating) {
      selectRatingHtml += `
       <div class="testimonial">
           <img src="${rating.image}" class="profile-testimonial" />
           <p class="quote">
           ${rating.quote}
           </p>
           <p class="author">- ${rating.author}</p>
           <p class="rating"> ${rating.rating}
           <i class="fa-solid fa-star"></i>
           </p>
       </div>`;
    });
  }
  document.getElementById("testimonials").innerHTML = selectRatingHtml;
}
