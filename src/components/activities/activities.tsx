import "twin.macro"
import { ExternalLinkIcon } from "@heroicons/react/solid"
import {
  Card,
  CardContent,
  CardContentTitle,
  CardContentBody,
  CardContentFooter,
} from "../../components"
import { ModuleHeadline } from "../../elements"

export const Activities = ({ activities }: ActivitiesProps) => {
  return (
    <section>
      <div tw="container">
        <ModuleHeadline>My latest activities</ModuleHeadline>
        <div tw="grid gap-8 mt-16 sm:grid-cols-2 lg:(grid-cols-3 gap-12)">
          {activities.map((activity, key) => (
            <Card
              as="a"
              target="_blank"
              href={activity.href}
              rel="noopener noreferrer"
              key={key}
              tw="transform transition-transform hover:(scale-105 ease-in-out duration-300)"
            >
              <CardContent tw="text-gray-300">
                {activity.title && (
                  <CardContentTitle>{activity.title}</CardContentTitle>
                )}
                {activity.text && (
                  <CardContentBody>
                    <p>{activity.text}</p>
                  </CardContentBody>
                )}
                <CardContentFooter tw="flex justify-between items-center">
                  {activity.href}
                  <ExternalLinkIcon tw="w-6 h-auto text-primary" />
                </CardContentFooter>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export type ActivitiesProps = {
  activities: {
    title?: string
    text?: string
    href?: string
  }[]
}
