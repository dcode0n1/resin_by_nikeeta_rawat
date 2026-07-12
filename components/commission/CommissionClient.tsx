"use client";

import { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import FadeUp from "@/components/ui/FadeUp";
import { submitCommission } from "@/app/actions/commission";

// Define the validation schema using Zod
const commissionSchema = z
  .object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Invalid email address"),
    phone: z.string().min(10, "Phone number must be at least 10 digits"),
    occasion: z.string().min(1, "Please select an occasion"),
    customOccasion: z.string().optional(),
    category: z.string().min(1, "Please select a category"),
    artworkType: z.string().optional(),
    story: z.string().min(10, "Please share a story (at least 10 characters)"),
    customization: z.string().optional(),
    budget: z.string().min(1, "Please select a budget bracket"),
    completionDate: z.string().min(1, "Please select a preferred completion date"),
    message: z.string().optional(),
    scheduleCall: z.enum(["yes", "no"]),
  })
  .refine(
    (data) => {
      if (data.occasion === "other") {
        return !!data.customOccasion && data.customOccasion.trim().length > 0;
      }
      return true;
    },
    {
      message: "Please specify your custom occasion",
      path: ["customOccasion"],
    }
  );

type CommissionFormValues = z.infer<typeof commissionSchema>;

export default function CommissionClient() {
  const [submitted, setSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState<CommissionFormValues | null>(null);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<CommissionFormValues>({
    resolver: zodResolver(commissionSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      occasion: "wedding",
      customOccasion: "",
      category: "wedding-preservation",
      artworkType: "10-inch-hexagon",
      story: "",
      customization: "",
      budget: "8500-15000",
      completionDate: "",
      message: "",
      scheduleCall: "yes",
    },
  });

  // Watch the occasion to conditionally render customOccasion field
  const occasion = watch("occasion");

  const onSubmit = async (data: CommissionFormValues) => {
    setSubmitError(null);
    try {
      const result = await submitCommission(data);
      if (result.success) {
        setSubmittedData(data);
        setSubmitted(true);
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        setSubmitError(result.error || "Failed to submit request. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setSubmitError("A connection error occurred. Please check your database connection or try again later.");
    }
  };

  return (
    <>
      {submitted && submittedData ? (
        <FadeUp className="max-w-2xl mx-auto py-12 px-6 sm:px-8 border border-gold/20 bg-studio-surface space-y-6">
          <div className="text-center space-y-4">
            <span className="text-5xl block">✨</span>
            <h2 className="font-serif text-3xl text-gold font-light tracking-wide">Thank You for Sharing Your Story</h2>
            <p className="text-zinc-300 text-sm font-light leading-relaxed">
              Your commission request has been received. Artist Nikeeta Rawat reviews each inquiry personally. We will contact you via email and phone/WhatsApp within 24 hours to schedule your design consultation and provide details on shipping your flowers.
            </p>
          </div>

          {/* Submitted Data Summary Box */}
          <div className="border border-white/5 bg-studio-bg/60 p-6 sm:p-8 space-y-6 rounded-none mt-8 text-left font-light">
            <div className="border-b border-white/10 pb-3">
              <h3 className="text-xs uppercase tracking-[0.2em] text-gold font-semibold">
                Summary of Your Commission Inquiry
              </h3>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 text-sm">
              <div className="space-y-1">
                <span className="text-xs text-zinc-500 uppercase tracking-wider block">Full Name</span>
                <span className="text-white font-normal">{submittedData.name}</span>
              </div>
              
              <div className="space-y-1">
                <span className="text-xs text-zinc-500 uppercase tracking-wider block">Email Address</span>
                <span className="text-white font-normal break-all">{submittedData.email}</span>
              </div>

              <div className="space-y-1">
                <span className="text-xs text-zinc-500 uppercase tracking-wider block">Phone Number</span>
                <span className="text-white font-normal">{submittedData.phone}</span>
              </div>

              <div className="space-y-1">
                <span className="text-xs text-zinc-500 uppercase tracking-wider block">Occasion</span>
                <span className="text-white font-normal capitalize">
                  {submittedData.occasion === "other" ? submittedData.customOccasion : submittedData.occasion}
                </span>
              </div>

              <div className="space-y-1">
                <span className="text-xs text-zinc-500 uppercase tracking-wider block">Artwork Category</span>
                <span className="text-white font-normal capitalize">
                  {submittedData.category.replace("-", " ")}
                </span>
              </div>

              {submittedData.artworkType && (
                <div className="space-y-1">
                  <span className="text-xs text-zinc-500 uppercase tracking-wider block">Desired Format / Artwork Type</span>
                  <span className="text-white font-normal">{submittedData.artworkType}</span>
                </div>
              )}

              <div className="space-y-1">
                <span className="text-xs text-zinc-500 uppercase tracking-wider block">Budget Bracket (INR)</span>
                <span className="text-white font-normal capitalize">
                  {submittedData.budget === "under-5000" && "Below ₹5,000"}
                  {submittedData.budget === "5000-8500" && "₹5,000 - ₹8,500"}
                  {submittedData.budget === "8500-15000" && "₹8,500 - ₹15,000"}
                  {submittedData.budget === "15000-45000" && "₹15,000 - ₹45,000"}
                  {submittedData.budget === "above-45000" && "Above ₹45,000 (Furniture / Large Installs)"}
                </span>
              </div>

              <div className="space-y-1">
                <span className="text-xs text-zinc-500 uppercase tracking-wider block">Preferred Completion Date</span>
                <span className="text-white font-normal">{submittedData.completionDate}</span>
              </div>

              <div className="space-y-1 sm:col-span-2">
                <span className="text-xs text-zinc-500 uppercase tracking-wider block">15-min Intro Video Call?</span>
                <span className="text-white font-normal">
                  {submittedData.scheduleCall === "yes" ? "Yes, schedule design call" : "No, discuss via WhatsApp"}
                </span>
              </div>

              {submittedData.customization && (
                <div className="space-y-1 sm:col-span-2">
                  <span className="text-xs text-zinc-500 uppercase tracking-wider block">Preferred Inserts & Customizations</span>
                  <span className="text-white font-normal">{submittedData.customization}</span>
                </div>
              )}
            </div>

            <div className="border-t border-white/5 pt-4 space-y-4">
              <div className="space-y-1">
                <span className="text-xs text-zinc-500 uppercase tracking-wider block">The Story Behind the Flowers</span>
                <p className="text-zinc-300 text-sm leading-relaxed italic bg-studio-surface/50 p-4 border-l border-gold/30">
                  "{submittedData.story}"
                </p>
              </div>

              {submittedData.message && (
                <div className="space-y-1">
                  <span className="text-xs text-zinc-500 uppercase tracking-wider block">Additional Message / Special Requests</span>
                  <p className="text-zinc-300 text-sm leading-relaxed bg-studio-surface/50 p-4">
                    {submittedData.message}
                  </p>
                </div>
              )}
            </div>
          </div>

          <div className="pt-6 text-center">
            <Link
              href="/"
              className="inline-flex border border-white/20 text-white text-xs uppercase tracking-[0.2em] font-medium px-8 py-3 hover:border-gold hover:text-gold transition-colors duration-300"
            >
              Return to Gallery
            </Link>
          </div>
        </FadeUp>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
          {/* Left Column: Guidelines */}
          <div className="lg:col-span-4 space-y-8 text-sm font-light text-zinc-400 leading-relaxed">
            <FadeUp className="space-y-6">
              <h3 className="font-serif text-xl text-white font-light tracking-wide">Guidelines for Commission</h3>
              
              <div className="space-y-2">
                <h4 className="text-xs uppercase tracking-wider text-gold font-medium">1. Event Coordination</h4>
                <p>For fresh floral preservation, secure your slot at least 2 weeks before your wedding or event. We only accept a limited number of commissions per week to guarantee individual attention.</p>
              </div>

              <div className="space-y-2">
                <h4 className="text-xs uppercase tracking-wider text-gold font-medium">2. Flower Transport</h4>
                <p>Once your slot is reserved, we will send packing instructions. Fresh flowers should be shipped via overnight express, or dropped off at our studio, within 2 days of the ceremony.</p>
              </div>

              <div className="space-y-2">
                <h4 className="text-xs uppercase tracking-wider text-gold font-medium">3. Curing Cycle</h4>
                <p>Due to the meticulous moisture extraction and multi-layered resin pouring process, items take between 4 to 12 weeks to complete. Quality takes patience.</p>
              </div>
            </FadeUp>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-8">
            <FadeUp delay={150}>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 bg-studio-surface border border-white/5 p-6 sm:p-8 md:p-12">
                {/* Section 1: Client Information */}
                <div className="space-y-6">
                  <h3 className="text-xs uppercase tracking-[0.2em] text-gold font-semibold border-b border-white/5 pb-2">
                    01. Personal Information
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="flex flex-col space-y-2">
                      <label className="text-xs uppercase tracking-wider text-zinc-400">Full Name *</label>
                      <input
                        type="text"
                        {...register("name")}
                        className="bg-studio-bg border border-white/10 px-4 py-3 text-sm text-white focus:outline-none focus:border-gold transition-colors font-light"
                      />
                      {errors.name && (
                        <span className="text-rose-400 text-xs font-light">{errors.name.message}</span>
                      )}
                    </div>
                    <div className="flex flex-col space-y-2">
                      <label className="text-xs uppercase tracking-wider text-zinc-400">Email Address *</label>
                      <input
                        type="text"
                        {...register("email")}
                        className="bg-studio-bg border border-white/10 px-4 py-3 text-sm text-white focus:outline-none focus:border-gold transition-colors font-light"
                      />
                      {errors.email && (
                        <span className="text-rose-400 text-xs font-light">{errors.email.message}</span>
                      )}
                    </div>
                  </div>
                  <div className="flex flex-col space-y-2">
                    <label className="text-xs uppercase tracking-wider text-zinc-400">Phone Number (preferably WhatsApp) *</label>
                    <input
                      type="tel"
                      placeholder="+91"
                      {...register("phone")}
                      className="bg-studio-bg border border-white/10 px-4 py-3 text-sm text-white focus:outline-none focus:border-gold transition-colors font-light"
                    />
                    {errors.phone && (
                      <span className="text-rose-400 text-xs font-light">{errors.phone.message}</span>
                    )}
                  </div>
                </div>

                {/* Section 2: Commission Details */}
                <div className="space-y-6">
                  <h3 className="text-xs uppercase tracking-[0.2em] text-gold font-semibold border-b border-white/5 pb-2">
                    02. Curation details
                  </h3>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="flex flex-col space-y-2">
                      <label className="text-xs uppercase tracking-wider text-zinc-400">Occasion</label>
                      <select
                        {...register("occasion")}
                        className="bg-studio-bg border border-white/10 px-4 py-3 text-sm text-white focus:outline-none focus:border-gold transition-colors font-light"
                      >
                        <option value="wedding">Wedding Preservation</option>
                        <option value="memorial">Memorial Tribute</option>
                        <option value="gift">Personalized Gift</option>
                        <option value="interior">Interior Statement Installation</option>
                        <option value="other">Other Occasion (Specify below)</option>
                      </select>
                      {errors.occasion && (
                        <span className="text-rose-400 text-xs font-light">{errors.occasion.message}</span>
                      )}
                    </div>
                    
                    <div className="flex flex-col space-y-2">
                      <label className="text-xs uppercase tracking-wider text-zinc-400">Primary Collection Category</label>
                      <select
                        {...register("category")}
                        className="bg-studio-bg border border-white/10 px-4 py-3 text-sm text-white focus:outline-none focus:border-gold transition-colors font-light"
                      >
                        <option value="wedding-preservation">Wedding Preservation</option>
                        <option value="jewellery">Jewellery Collection</option>
                        <option value="frames">Floral Frames</option>
                        <option value="memorial">Memorial Collection</option>
                        <option value="home-decor">Home Decor</option>
                        <option value="furniture">Bespoke Furniture</option>
                        <option value="corporate-gifts">Corporate Gifts</option>
                        <option value="name-plates">Bespoke Name Plates</option>
                      </select>
                      {errors.category && (
                        <span className="text-rose-400 text-xs font-light">{errors.category.message}</span>
                      )}
                    </div>
                  </div>

                  {occasion === "other" && (
                    <div className="flex flex-col space-y-2">
                      <label className="text-xs uppercase tracking-wider text-zinc-400">Please Specify Occasion *</label>
                      <input
                        type="text"
                        {...register("customOccasion")}
                        className="bg-studio-bg border border-white/10 px-4 py-3 text-sm text-white focus:outline-none focus:border-gold transition-colors font-light"
                      />
                      {errors.customOccasion && (
                        <span className="text-rose-400 text-xs font-light">{errors.customOccasion.message}</span>
                      )}
                    </div>
                  )}

                  <div className="flex flex-col space-y-2">
                    <label className="text-xs uppercase tracking-wider text-zinc-400">Desired Format / Artwork Type</label>
                    <input
                      type="text"
                      placeholder="e.g. 10-inch Hexagon Block, River Side-Table, Botanical Jhumkas"
                      {...register("artworkType")}
                      className="bg-studio-bg border border-white/10 px-4 py-3 text-sm text-white focus:outline-none focus:border-gold transition-colors font-light"
                    />
                    {errors.artworkType && (
                      <span className="text-rose-400 text-xs font-light">{errors.artworkType.message}</span>
                    )}
                  </div>

                  <div className="flex flex-col space-y-2">
                    <label className="text-xs uppercase tracking-wider text-zinc-400">The Story behind the Flowers / Keepsakes *</label>
                    <textarea
                      rows={4}
                      placeholder="Please tell us what these elements represent. An emotional summary helps us capture the mood during curation."
                      {...register("story")}
                      className="bg-studio-bg border border-white/10 px-4 py-3 text-sm text-white focus:outline-none focus:border-gold transition-colors font-light resize-none"
                    />
                    {errors.story && (
                      <span className="text-rose-400 text-xs font-light">{errors.story.message}</span>
                    )}
                  </div>

                  <div className="flex flex-col space-y-2">
                    <label className="text-xs uppercase tracking-wider text-zinc-400">Preferred Inserts & Customizations</label>
                    <input
                      type="text"
                      placeholder="e.g. Gold flakes, invitation card, locks of hair, photographs, brass text"
                      {...register("customization")}
                      className="bg-studio-bg border border-white/10 px-4 py-3 text-sm text-white focus:outline-none focus:border-gold transition-colors font-light"
                    />
                    {errors.customization && (
                      <span className="text-rose-400 text-xs font-light">{errors.customization.message}</span>
                    )}
                  </div>
                </div>

                {/* Section 3: Logistics */}
                <div className="space-y-6">
                  <h3 className="text-xs uppercase tracking-[0.2em] text-gold font-semibold border-b border-white/5 pb-2">
                    03. Logistics & Timeline
                  </h3>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="flex flex-col space-y-2">
                      <label className="text-xs uppercase tracking-wider text-zinc-400">Budget Bracket (INR)</label>
                      <select
                        {...register("budget")}
                        className="bg-studio-bg border border-white/10 px-4 py-3 text-sm text-white focus:outline-none focus:border-gold transition-colors font-light"
                      >
                        <option value="under-5000">Below ₹5,000</option>
                        <option value="5000-8500">₹5,000 - ₹8,500</option>
                        <option value="8500-15000">₹8,500 - ₹15,000</option>
                        <option value="15000-45000">₹15,000 - ₹45,000</option>
                        <option value="above-45000">Above ₹45,000 (Furniture / Large Installs)</option>
                      </select>
                      {errors.budget && (
                        <span className="text-rose-400 text-xs font-light">{errors.budget.message}</span>
                      )}
                    </div>
                    
                    <div className="flex flex-col space-y-2">
                      <label className="text-xs uppercase tracking-wider text-zinc-400">Preferred Completion Date *</label>
                      <input
                        type="date"
                        {...register("completionDate")}
                        className="bg-studio-bg border border-white/10 px-4 py-3 text-sm text-white focus:outline-none focus:border-gold transition-colors font-light animate-none"
                      />
                      {errors.completionDate && (
                        <span className="text-rose-400 text-xs font-light">{errors.completionDate.message}</span>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-col space-y-2">
                    <label className="text-xs uppercase tracking-wider text-zinc-400">Additional Message / Special requests</label>
                    <textarea
                      rows={3}
                      {...register("message")}
                      className="bg-studio-bg border border-white/10 px-4 py-3 text-sm text-white focus:outline-none focus:border-gold transition-colors font-light resize-none"
                    />
                    {errors.message && (
                      <span className="text-rose-400 text-xs font-light">{errors.message.message}</span>
                    )}
                  </div>

                  <div className="flex flex-col space-y-4 pt-2">
                    <label className="text-xs uppercase tracking-wider text-zinc-400 block">Would you like to schedule a 15-minute introductory video consultation call? *</label>
                    <div className="flex gap-8">
                      <label className="flex items-center gap-2 cursor-pointer text-sm">
                        <input
                          type="radio"
                          value="yes"
                          {...register("scheduleCall")}
                          className="accent-gold h-4 w-4"
                        />
                        Yes, I want to book a design call.
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer text-sm">
                        <input
                          type="radio"
                          value="no"
                          {...register("scheduleCall")}
                          className="accent-gold h-4 w-4"
                        />
                        No, WhatsApp discussion is enough.
                      </label>
                    </div>
                    {errors.scheduleCall && (
                      <span className="text-rose-400 text-xs font-light block">{errors.scheduleCall.message}</span>
                    )}
                  </div>
                </div>

                {/* Submit Error Message */}
                {submitError && (
                  <div className="bg-rose-950/40 border border-rose-500/30 p-4 text-rose-200 text-sm font-light leading-relaxed">
                    {submitError}
                  </div>
                )}

                {/* Submit Button */}
                <div className="pt-6">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gold border border-gold text-black text-xs uppercase tracking-[0.2em] font-semibold py-4 hover:bg-transparent hover:text-gold transition-all duration-300 rounded-none shadow-md shadow-gold/10 disabled:opacity-50 cursor-pointer"
                  >
                    {isSubmitting ? "Submitting Request..." : "Submit Commission Request"}
                  </button>
                </div>
              </form>
            </FadeUp>
          </div>
        </div>
      )}
    </>
  );
}
