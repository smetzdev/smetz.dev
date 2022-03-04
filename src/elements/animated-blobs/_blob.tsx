import "twin.macro"

export const Blob = ({ className }: BlobProps) => (
  <div
    tw="absolute rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"
    className={className}
  />
)

export type BlobProps = {
  className?: string
}
