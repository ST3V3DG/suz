import { InfiniteSlider } from '@/components/motion-primitives/infinite-slider'
import { ProgressiveBlur } from '@/components/motion-primitives/progressive-blur'

export default function LogoCloud() {
    return (
      <section className="py-16 overflow-hidden bg-primary/30">
        <div className="relative px-6 m-auto group max-w-7xl">
          <div className="flex flex-col items-center md:flex-row">
            <div className="md:max-w-44 md:border-r md:pr-6">
              <p className="text-sm text-end">Powered by great teams</p>
            </div>
            <div className="relative py-6 md:w-[calc(100%-11rem)]">
              <InfiniteSlider speedOnHover={20} speed={40} gap={112}>
                <div className="flex">
                  <img
                    className="h-5 mx-auto w-fit dark:invert"
                    src="https://html.tailus.io/blocks/customers/nvidia.svg"
                    alt="Nvidia Logo"
                    height="20"
                    width="auto"
                  />
                </div>

                <div className="flex">
                  <img
                    className="h-4 mx-auto w-fit dark:invert"
                    src="https://html.tailus.io/blocks/customers/column.svg"
                    alt="Column Logo"
                    height="16"
                    width="auto"
                  />
                </div>
                <div className="flex">
                  <img
                    className="h-4 mx-auto w-fit dark:invert"
                    src="https://html.tailus.io/blocks/customers/github.svg"
                    alt="GitHub Logo"
                    height="16"
                    width="auto"
                  />
                </div>
                <div className="flex">
                  <img
                    className="h-5 mx-auto w-fit dark:invert"
                    src="https://html.tailus.io/blocks/customers/nike.svg"
                    alt="Nike Logo"
                    height="20"
                    width="auto"
                  />
                </div>
                <div className="flex">
                  <img
                    className="h-5 mx-auto w-fit dark:invert"
                    src="https://html.tailus.io/blocks/customers/lemonsqueezy.svg"
                    alt="Lemon Squeezy Logo"
                    height="20"
                    width="auto"
                  />
                </div>
                <div className="flex">
                  <img
                    className="h-4 mx-auto w-fit dark:invert"
                    src="https://html.tailus.io/blocks/customers/laravel.svg"
                    alt="Laravel Logo"
                    height="16"
                    width="auto"
                  />
                </div>
                <div className="flex">
                  <img
                    className="mx-auto h-7 w-fit dark:invert"
                    src="https://html.tailus.io/blocks/customers/lilly.svg"
                    alt="Lilly Logo"
                    height="28"
                    width="auto"
                  />
                </div>

                <div className="flex">
                  <img
                    className="h-6 mx-auto w-fit dark:invert"
                    src="https://html.tailus.io/blocks/customers/openai.svg"
                    alt="OpenAI Logo"
                    height="24"
                    width="auto"
                  />
                </div>
              </InfiniteSlider>

              <div className="absolute inset-y-0 left-0 w-20 bg-linear-to-r from-background"></div>
              <div className="absolute inset-y-0 right-0 w-20 bg-linear-to-l from-background"></div>
              <ProgressiveBlur
                className="absolute top-0 left-0 w-20 h-full pointer-events-none bg-linear-to-r from-primary/30 to-transparent"
                direction="left"
                blurIntensity={1}
              />
              <ProgressiveBlur
                className="absolute top-0 right-0 w-20 h-full pointer-events-none bg-linear-to-r from-transparent to-primary/30"
                direction="right"
                blurIntensity={1}
              />
            </div>
          </div>
        </div>
      </section>
    );
}
