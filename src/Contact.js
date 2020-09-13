import React from "react";
// const encode = (data) => {
//   return Object.keys(data)
//       .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
//       .join("&");
// }

// class Contact extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { name: "", email: "", message: "" };
//   }
export default function Contact(){
  return (
    <div><br/>
    <br/>
    <br/>
    <h3>welcome to contact our email: AMCwarehouseteam@gmail.com</h3>
    <h3>Address:1946 Sabre St , Haywared ,CA</h3>
    <p>Alan 510-356-7190 / Lucia 650-933-6166 /Romeo 510-509-5811</p>
    
    <p> </p></div>
  )
}
  /* Here’s the juicy bit for posting the form submission */

  // handleSubmit = e => {
  //   fetch("/", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/x-www-form-urlencoded" },
  //     body: encode({ "form-name": "contact", ...this.state })
  //   })
  //     .then(() => alert("Success!"))
  //     .catch(error => alert(error));

  //   e.preventDefault();
  // };

  // handleChange = e => this.setState({ [e.target.name]: e.target.value });

  // render() {
  //   const { name, email, message } = this.state;
  //   return (
  //     <form onSubmit={this.handleSubmit}>
  //       <br/>
  //       <br/>
  //       <br/>
  //       <h3>welcome to contact our email: AMCwarehouseteam@gmail.com</h3>
  //       <h3>Address:1946 Sabre St , Haywared ,CA</h3>
  //       <p>Alan 510-356-7190</p><p>LuLu 650-933-6166</p>
        
  //       <p>Romeo 510-509-5811</p>
        // {/* <p>
//           <label>
//             Your Name: <input type="text" name="name" value={name} onChange={this.handleChange} />
//           </label>
//         </p>
//         <p>
//           <label>
//             Your Email: <input type="email" name="email" value={email} onChange={this.handleChange} />
//           </label>
//         </p>
//         <p>
//           <label>
//             Message: <textarea name="message" value={message} onChange={this.handleChange} />
//           </label>
//         </p>
//         <p>
//           <button type="submit">Send</button>
//         </p> */}
//       </form>
//     );
//   }
// }

// export default Contact;