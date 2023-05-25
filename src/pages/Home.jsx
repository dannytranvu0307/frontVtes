
import { useTranslation } from 'react-i18next';
function Home() {

    return (
        <main class="flex flex-col w-full bg-white overflow-x-hidden overflow-y-auto mb-14">
            <div class="flex w-full mx-auto px-6 py-8">
                <div class="flex flex-col w-full h-[500px] text-gray-900 text-xl border-4 border-gray-900 border-dashed">
                    <div class="flex w-12 h-60 bg-green-400 border-b border-gray-600">Post</div>
                    <div class="flex w-12 bg-green-400 border-b border-gray-600">Post</div>
                    <div class="flex w-12 mt-auto bg-green-400 border-b border-gray-600">Post</div>
                </div>
            </div>
        </main>
)
}
export default Home