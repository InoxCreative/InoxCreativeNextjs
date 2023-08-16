import PrimaryButton from '../buttons/PrimaryButton'

export default function ContentFeaturedSeciton() {
  return (
    <div className="w-5/6 md:w-2/5 border-2 m-auto">
      <h5 className="text-xs">Ready to see the results?</h5>

      <h2 className="text-5xl font-semibold"> Start your revolution</h2>
      <p className="text-2xl tracking-tighter leading-none">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat unde
        ex minima veniam iste commodi molestias exercitationem quaerat dolorem
        reiciendis.
      </p>
      <PrimaryButton>Get Started</PrimaryButton>
    </div>
  )
}