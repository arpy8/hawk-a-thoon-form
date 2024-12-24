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
  title?: string
  desc?: string
  link?: string
}

export function CardWithForm({ title="", desc="", link="" }: CardWithFormProps) {
  return (
    <Card className="w-[250px] text-center">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{desc}</CardDescription>
      </CardHeader>
      <CardFooter className="flex justify-center">
        <a href={link} target="_blank" rel="noreferrer"><Button>Register</Button></a>
      </CardFooter>
    </Card>
  )
}

export function CardWithForm2({ title="", desc="", link="" }: CardWithFormProps) {
  return (
    <Card className="w-[250px] text-center">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{desc}</CardDescription>
      </CardHeader>
      <CardFooter className="flex justify-center">
        <a href={link} target="_blank" rel="noreferrer"><Button>Link</Button></a>
      </CardFooter>
    </Card>
  )
}