import React from 'react';


const notify = () => alert("Submitted");
const Contact = () => {
return <div className='contact' >
	<div className="container">
<h1 className='One'>Contact Us </h1>
<form target="_blank" action="" method="POST">
  <div class="form-group">
	<div class="form-row">
	  <div class="col">
		<input type="text" name="name" class="form-control" placeholder="Full Name" required />
	  </div>
	  <div class="col">
		<input type="email" name="email" class="form-control" placeholder="Email Address" required />
	  </div>
	</div>
  </div>
  <div class="form-group">
	<textarea placeholder="Your Message" class="form-control" name="message" rows="10" required></textarea>
  </div>
  <div className ='Two'> <button onClick={notify} type="Submit" class="btn  btn-danger btn-primary btn-lg">Submit</button></div>
                        
</form>
</div>
</div>
};

export default Contact;