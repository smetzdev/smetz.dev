import "twin.macro"
import {
  Card,
  CardContent,
  CardContentTitle,
  CardContentBody,
  CardContentFooter,
} from "./index"

export default {
  title: "Components/Card",
}

export const Base = () => (
  <div tw="max-w-sm">
    <Card>
      <CardContent>
        <CardContentTitle>Iam the title</CardContentTitle>
        <CardContentBody>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla
            blanditiis sapiente rem asperiores, excepturi itaque accusantium?
          </p>
        </CardContentBody>
        <CardContentFooter>Iam the Footer</CardContentFooter>
      </CardContent>
    </Card>
  </div>
)

export const InGrid = () => (
  <div tw="grid sm:grid-cols-2 gap-8 lg:grid-cols-3">
    {/* Row 1 (Desktop) */}
    <Card>
      <CardContent>
        <CardContentTitle>Iam the title</CardContentTitle>
        <CardContentBody>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla
            blanditiis sapiente rem asperiores, excepturi itaque accusantium?
          </p>
        </CardContentBody>
        <CardContentFooter>Iam the Footer</CardContentFooter>
      </CardContent>
    </Card>
    <Card>
      <CardContent>
        <CardContentTitle>Iam the title</CardContentTitle>
        <CardContentBody>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla
            blanditiis sapiente rem asperiores, excepturi itaque accusantium?
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla
            blanditiis sapiente rem asperiores, excepturi itaque accusantium?
          </p>
        </CardContentBody>
        <CardContentFooter>Iam the Footer</CardContentFooter>
      </CardContent>
    </Card>
    <Card>
      <CardContent>
        <CardContentTitle>Iam the title</CardContentTitle>
        <CardContentBody>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla
            blanditiis sapiente rem asperiores, excepturi itaque accusantium?
          </p>
        </CardContentBody>
        <CardContentFooter>Iam the Footer</CardContentFooter>
      </CardContent>
    </Card>
    {/* Row 2 (Desktop) */}
    <Card>
      <CardContent>
        <CardContentBody noMarginTop>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla
            blanditiis sapiente rem asperiores, excepturi itaque accusantium?
          </p>
        </CardContentBody>
        <CardContentFooter>Iam the Footer</CardContentFooter>
      </CardContent>
    </Card>
    <Card>
      <CardContent>
        <CardContentTitle>Iam the title</CardContentTitle>
        <CardContentBody noMarginBottom>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla
            blanditiis sapiente rem asperiores, excepturi itaque accusantium?
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla
            blanditiis sapiente rem asperiores, excepturi itaque accusantium?
          </p>
        </CardContentBody>
      </CardContent>
    </Card>
    <Card>
      <CardContent>
        <CardContentBody noMarginTop noMarginBottom>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla
            blanditiis sapiente rem asperiores, excepturi itaque accusantium?
          </p>
        </CardContentBody>
      </CardContent>
    </Card>
  </div>
)

export const Override = () => (
  <div tw="max-w-sm">
    <Card
      tw="rounded-none! bg-gray-800! border border-gray-500 shadow-xl transition-transform transform hover:scale-105"
      as="div"
    >
      <CardContent>
        <CardContentTitle as="h1" tw="text-primary!">
          Iam the title
        </CardContentTitle>
        <CardContentBody tw="mt-2! mb-4!">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla
            blanditiis sapiente rem asperiores, excepturi itaque accusantium?
          </p>
        </CardContentBody>
        <CardContentFooter>Iam the Footer</CardContentFooter>
      </CardContent>
    </Card>
  </div>
)
