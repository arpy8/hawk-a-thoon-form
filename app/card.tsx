import * as React from "react"


import { Button } from "@/components/ui/button"
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

interface CardWithFormProps {
  title: string
  link: string
}

export function CardWithForm({ title, link }: CardWithFormProps) {
  return (
    <Card className="w-[250px] text-center">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>Click to register below</CardDescription>
      </CardHeader>
      <CardFooter className="flex justify-center">
        <a href={link} target="_blank" rel="noreferrer"><Button>Register</Button></a>
      </CardFooter>
    </Card>
  )
}