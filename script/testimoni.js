/** @format */

class Testimonial {
  #quote = "";
  #image = "";

  constructor(quote, image) {
    this.#quote = quote;
    this.#image = image;
  }

  get quote() {
    return this.#quote;
  }

  get image() {
    return this.#image;
  }

  // This is an abstract method that subclasses will implement
  get author() {
    throw new Error("getAuthor() method must be implemented.");
  }

  // This is a polymorphic method than can take any subclass of Testimonial
  get testimonialHTML() {
    return `
        <div class="testimonial">
            <img src="${this.image}" class="profile-testimonial" />
            <p class="quote">
                ${this.quote}
            </p>
            <p class="author">- ${this.author}</p>
        </div>
    `;
  }
}

class AuthorTestimonial extends Testimonial {
  #author = "";

  constructor(author, quote, image) {
    super(quote, image);
    this.#author = author;
  }

  get author() {
    return this.#author;
  }
}

class CompanyTestimonial extends Testimonial {
  #company = "";

  constructor(author, quote, image) {
    super(quote, image);
    this.#company = author;
  }

  get author() {
    return this.#company + " Company";
  }
}

const testimonial1 = new AuthorTestimonial(
  "Kota damai",
  "Jakartaaa",
  "https://plus.unsplash.com/premium_photo-1691547067161-fc1600117827?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1933&q=80"
);

const testimonial2 = new AuthorTestimonial(
  "Cintara Surya",
  "Keren lah pokoknya",
  "https://plus.unsplash.com/premium_photo-1687187499404-2ed3c77b3cfe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwbHVzLWZlZWR8Mjk2fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60"
);

const testimonial3 = new AuthorTestimonial(
  "Bad boys",
  "",
  "https://plus.unsplash.com/premium_photo-1688497830977-f9ab9f958ca7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2551&q=80"
);

const testimonial4 = new AuthorTestimonial(
  "Agung Purba",
  "orang terkeren didunia",
  "image/123.jpeg"
);

let testimonialData = [testimonial1, testimonial2, testimonial3, testimonial4];
let testimonialHTML = "";

for (let i = 0; i < testimonialData.length; i++) {
  testimonialHTML += testimonialData[i].testimonialHTML;
}

document.getElementById("testimonials").innerHTML = testimonialHTML;
