"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Mail, Check } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import portfolioData from "@/data/portfolioData.json";


export default function PortfolioPage() {

  const [copiedEmail, setCopiedEmail] = useState<string | null>(null);

  const copyToClipboard = async (email: string) => {
    try {
      await navigator.clipboard.writeText(email);
      setCopiedEmail(email);
      setTimeout(() => setCopiedEmail(null), 2000); // Reset after 2 seconds
    } catch (err) {
      console.error("Failed to copy email:", err);
    }
  };
  return (

    <div className="container mx-auto p-6 h-screen flex flex-col overflow-y-auto min-h-full">
      <Card className="space-y-4">
        <CardHeader className="flex items-center">
          <Avatar className="size-40">
            <AvatarImage src="/DSC_6345.jpg" alt="Your Name" />
            <AvatarFallback>YN</AvatarFallback>
          </Avatar>
          <CardTitle className="text-2xl font-bold mt-4">Kristalys Ruiz Rohena</CardTitle>
          <p className="text-gray-500">PhD Student @ The University of Texas at El Paso</p>
          <p className="text-gray-500">Advisor: Dr. Christoph Lauter</p>
          <p>
          Currently my research focus on Architectural Support for AI through alternative numbers representations and how these compare. </p>
          <div className="flex flex-col items-center space-y-3">
            {portfolioData.emails.map((emailObj) => (
              <Button
                key={emailObj.address}
                variant="outline"
                className="flex items-center space-x-2"
                onClick={() => copyToClipboard(emailObj.address)}
              >
                {copiedEmail === emailObj.address ? <Check size={18} /> : <Mail size={18} />}
                <span>{copiedEmail === emailObj.address ? "Copied!" : emailObj.address}</span>
              </Button>
            ))}
          </div>
      </CardHeader>
        {/* <CardContent className="space-y-4">
          <p className="text-gray-700 text-center text-lg">
            Hola! I am PhD Student working on Architectural Support for AI through alternative numbers representations.
          </p>

          <p className="text-gray-700 text-center text-lg">
            Just to share a little about myself I am from Trujillo Alto, Puerto Rico.
            I am catholic.
            I love reading, music and photography.
            Not a fan of social media and my main method of transportation has been a bicycle for the past 10 years.
          </p>
        </CardContent> */}
      </Card>
      <Card className="mt-6 ">
        <CardHeader>
          <CardTitle>Education</CardTitle>
        </CardHeader>
        <CardContent>
          {portfolioData.education.map((edu, index) => (
            <div key={index} className="mb-4 border-b pb-2">
              <h3 className="font-semibold">{edu.degree}</h3>
              <p className="text-sm text-gray-600">{edu.institution}</p>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card className="mt-6 ">
        <CardHeader>
          <CardTitle>Published Work</CardTitle>
        </CardHeader>
        <CardContent>
          {portfolioData.publishedWork.map((work, index) => (
            <div key={index} className="mb-4 border-b pb-2">
              <h3 className="font-semibold">{work.title}</h3>
              <p className="text-sm text-gray-600">{work.event}</p>
              <p className="text-sm text-gray-500">{work.period}</p>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card className=" min-w-full mt-6">
        <CardHeader>
          <CardTitle>Research Experience</CardTitle>
        </CardHeader>
        <CardContent>
          {portfolioData.researchExperience.map((research, index) => (
            <div key={index} className="mb-4 border-b pb-2">
              <h3 className="font-semibold">{research.title}</h3>
              <p className="text-sm text-gray-600">{research.institution}</p>
              <p className="text-sm text-gray-500">{research.description}</p>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card className="min-w-full mt-6">
        <CardHeader>
          <CardTitle>Professional Experience</CardTitle>
        </CardHeader>
        <CardContent>
          {portfolioData.professionalExperience.map((job, index) => (
            <div key={index} className="mb-4 border-b pb-2">
              <h3 className="font-semibold">{job.title}</h3>
              <p className="text-sm text-gray-600">{job.institution}</p>
              <p className="text-sm text-gray-500">{job.period}</p>
              <p className="text-sm text-gray-500">{job.description}</p>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card className=" mt-6">
        <CardHeader>
          <CardTitle>Teaching Assistant Experience</CardTitle>
        </CardHeader>
        <CardContent>
          {portfolioData.teachingAssistantExperience.map((ta, index) => (
            <div key={index} className="mb-4 border-b pb-2">
              <h3 className="font-semibold">{ta.title}</h3>
              <p className="text-sm text-gray-600">
                {ta.role}, {ta.institution}
              </p>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card  className="mt-6">
        <CardHeader>
          <CardTitle>Extracurricular Activities</CardTitle>
        </CardHeader>
        <CardContent>
          {portfolioData.extracurricularActivities.map((activity, index) => (
            <div key={index} className="mb-4 border-b pb-2">
              <h3 className="font-semibold">{activity.title}</h3>
              <p className="text-sm text-gray-600">{activity.role}, {activity.institution}</p>
              <p className="text-sm text-gray-500">{activity.period}</p>
              <p className="text-sm text-gray-500">{activity.description}</p>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Fellowships</CardTitle>
        </CardHeader>
        <CardContent>
          {portfolioData.fellowships.map((fellowship, index) => (
            <div key={index} className="mb-4 border-b pb-2">
              <h3 className="font-semibold">{fellowship.title}</h3>
              <p className="text-sm text-gray-600">{fellowship.role}, {fellowship.institution}</p>
              <p className="text-sm text-gray-500">{fellowship.period}</p>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card className="mt-6 mb-6">
        <CardHeader>
          <CardTitle>Conferences & Workshops</CardTitle>
        </CardHeader>
        <CardContent>
          {portfolioData.conferences.map((conference, index) => (
            <div key={index} className="mb-4 border-b pb-2">
              <h3 className="font-semibold">{conference.title}</h3>
              <p className="text-sm text-gray-600">{conference.role}</p>
              <p className="text-sm text-gray-500">{conference.location}</p>
              <p className="text-sm text-gray-500">{conference.period}</p>
            </div>
          ))}
        </CardContent>
      </Card>

    </div>
  );
}
