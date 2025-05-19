import React, { useState } from "react";
import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";
import { motion } from "framer-motion";
import { useForm, ValidationError } from "@formspree/react";

const Contact = () => {
	const [state, handleSubmit] = useForm("xaneagdv"); // your Formspree form ID

	const [formData, setFormData] = useState({
		name: "",
		email: "",
		subject: "",
		message: "",
	});

	const [submitMessage, setSubmitMessage] = useState({
		type: "",
		text: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	return (
		<div className="space-y-10">
			<motion.div
				className="text-center max-w-2xl mx-auto space-y-4"
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}>
				<h1 className="text-4xl font-bold">Contact Me</h1>
				<p className="text-text-light">
					Have a project in mind or want to discuss a potential collaboration? Get in touch with me.
				</p>
			</motion.div>

			<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
				{/* Contact Information */}
				<div className="lg:col-span-1 space-y-6">
					<div
						className="bg-white rounded-xl p-6 shadow-sm"
						data-aos="fade-up">
						<h2 className="text-xl font-bold mb-6">Contact Information</h2>

						<div className="space-y-4">
							<div className="flex items-start">
								<div className="bg-primary/10 p-3 rounded-lg mr-4">
									<FiMail
										className="text-primary"
										size={20}
									/>
								</div>
								<div>
									<h3 className="font-medium">Email</h3>
									<a
										href="mailto:muhammadumairkhan945@gmail.com"
										className="text-text-light break-words break-all">
										muhammadumairkhan945@gmail.com
									</a>
								</div>
							</div>

							<div className="flex items-start">
								<div className="bg-primary/10 p-3 rounded-lg mr-4">
									<FiPhone
										className="text-primary"
										size={20}
									/>
								</div>
								<div>
									<h3 className="font-medium">Phone</h3>
									<a
										href="tel:+11234567890"
										className="text-text-light hover:text-primary transition-colors">
										+92 (340) 5688540
									</a>
								</div>
							</div>

							<div className="flex items-start">
								<div className="bg-primary/10 p-3 rounded-lg mr-4">
									<FiMapPin
										className="text-primary"
										size={20}
									/>
								</div>
								<div>
									<h3 className="font-medium">Location</h3>
									<p className="text-text-light">E-9, Islamabd, Pakistan</p>
								</div>
							</div>
						</div>
					</div>

					{/* Social Media Links */}
					<div
						className="bg-white rounded-xl p-6 shadow-sm"
						data-aos="fade-up"
						data-aos-delay="100">
						<h2 className="text-xl font-bold mb-6">Connect with Me</h2>
						<div className="flex flex-col gap-4">
							<a
								href="https://github.com/umair763"
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center p-3 rounded-lg border border-border hover:bg-gray-50 transition-colors">
								<FiGithub
									className="mr-3"
									size={20}
								/>
								<span>GitHub</span>
							</a>

							<a
								href="https://www.linkedin.com/in/muhammad-umair-khan-012549265/"
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center p-3 rounded-lg border border-border hover:bg-gray-50 transition-colors">
								<FiLinkedin
									className="mr-3"
									size={20}
								/>
								<span>LinkedIn</span>
							</a>

							<a
								href="https://twitter.com/"
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center p-3 rounded-lg border border-border hover:bg-gray-50 transition-colors">
								<FiTwitter
									className="mr-3"
									size={20}
								/>
								<span>Twitter</span>
							</a>
						</div>
					</div>
				</div>

				{/* Contact Form */}
				<div
					className="lg:col-span-2 bg-white rounded-xl p-6 shadow-sm"
					data-aos="fade-up"
					data-aos-delay="150">
					<h2 className="text-xl font-bold mb-6">Send Me a Message</h2>

					{submitMessage.text && (
						<div
							className={`p-4 rounded-lg mb-6 ${
								submitMessage.type === "success"
									? "bg-green-50 text-green-700 border border-green-200"
									: "bg-red-50 text-red-700 border border-red-200"
							}`}>
							{submitMessage.text}
						</div>
					)}

					<form
						onSubmit={handleSubmit}
						className="space-y-6">
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							<div className="form-group">
								<label
									htmlFor="name"
									className="form-label">
									Your Name
								</label>
								<input
									type="text"
									id="name"
									name="name"
									className="form-input"
									placeholder="John Doe"
									required
								/>
								<ValidationError
									prefix="Name"
									field="name"
									errors={state.errors}
								/>
							</div>

							<div className="form-group">
								<label
									htmlFor="email"
									className="form-label">
									Your Email
								</label>
								<input
									type="email"
									id="email"
									name="email"
									className="form-input"
									placeholder="john@example.com"
									required
								/>
								<ValidationError
									prefix="Name"
									field="name"
									errors={state.errors}
								/>
							</div>
						</div>

						<div className="form-group">
							<label
								htmlFor="subject"
								className="form-label">
								Subject
							</label>
							<input
								type="text"
								id="subject"
								name="subject"
								className="form-input"
								placeholder="Project Inquiry"
								required
							/>
							<ValidationError
								prefix="Name"
								field="name"
								errors={state.errors}
							/>
						</div>

						<div className="form-group">
							<label
								htmlFor="message"
								className="form-label">
								Message
							</label>
							<textarea
								id="message"
								name="message"
								onChange={handleChange}
								className="form-input min-h-[150px] resize-y"
								placeholder="Tell me about your project or inquiry..."
								required></textarea>
							<ValidationError
								prefix="Name"
								field="name"
								errors={state.errors}
							/>
						</div>
						{state.succeeded && (
							<div className="p-4 rounded-lg mb-6 bg-gradient-to-r from-green-50 to-emerald-50 text-green-700 border border-green-200 transform transition-all duration-500 hover:scale-105 hover:shadow-lg">
								<div className="flex items-center space-x-3">
									<svg
										className="w-6 h-6 text-green-500 animate-pulse"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24">
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M5 13l4 4L19 7"></path>
									</svg>
									<div>
										<h3 className="font-semibold text-lg">Thank you for reaching out!</h3>
										<p className="text-sm">I’ll be in touch shortly — your inquiry is receiving top priority.</p>
									</div>
								</div>
							</div>
						)}

						{state.errors && state.errors.length > 0 && (
							<div className="p-4 rounded-lg mb-6 bg-gradient-to-r from-red-50 to-rose-50 text-red-700 border border-red-200 transform transition-all duration-500 hover:scale-105 hover:shadow-lg">
								<div className="flex items-center space-x-3">
									<svg
										className="w-6 h-6 text-red-500 animate-pulse"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24">
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
									</svg>
									<div>
										<h3 className="font-semibold text-lg">We experienced a minor technical issue!</h3>
										<p className="text-sm">
											Please recheck your input and resubmit — your communication is important to us.
										</p>
									</div>
								</div>
							</div>
						)}

						<button
							type="submit"
							className="btn btn-primary w-full md:w-auto"
							disabled={state.submitting}>
							{state.submitting ? "Sending..." : "Send Message"}
						</button>
					</form>
				</div>
			</div>

			{/* FAQ Section */}
			{/* <section
				className="bg-white rounded-xl p-8 shadow-sm"
				data-aos="fade-up">
				<h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
					{[
						{
							question: "What services do you offer?",
							answer:
								"I specialize in frontend development, creating responsive websites, web applications, and interactive user interfaces using modern technologies like React and Next.js.",
						},
						{
							question: "What is your typical project timeline?",
							answer:
								"Project timelines vary based on complexity and scope. A simple website might take 2-3 weeks, while a complex web application could take 1-3 months. I'll provide a detailed timeline during our initial consultation.",
						},
						{
							question: "Do you offer maintenance services?",
							answer:
								"Yes, I offer maintenance packages to keep your website up-to-date, secure, and performing optimally after launch. This includes regular updates, bug fixes, and technical support.",
						},
						{
							question: "How do we start working together?",
							answer:
								"Our collaboration begins with an initial consultation to discuss your project requirements, goals, and timeline. After this, I'll provide a proposal and once approved, we can begin the development process.",
						},
					].map((faq, index) => (
						<div
							key={index}
							className="border border-border rounded-lg p-5"
							data-aos="fade-up"
							data-aos-delay={index * 100}>
							<h3 className="font-bold mb-2">{faq.question}</h3>
							<p className="text-text-light text-sm">{faq.answer}</p>
						</div>
					))}
				</div>
			</section> */}
		</div>
	);
};

export default Contact;
