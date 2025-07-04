import { useParams } from "react-router-dom";
import { Box, Typography } from '@mui/material';

const labContents = {
    1: 
        <Box>
            <ul>
                <li>Реализовать скрипт, который уведомит о полной загрузке страницы</li>
                <li>Реализовать кнопку счетчик, которая будет увеличивать счетчик на "1" и вывести его значение на страницу (button onclick)</li>
                <li>Реализовать кнопку счетчик, которая будет уменьшать счетчик на "1" реализовать с помощью listener click</li>
                <li>Реализовать форму аутентификации пользователя (form) 
                    <ul>
                        <li>Реализовать скрипт очистки данных формы</li>
                        <li>Реализовать скрипт отправки данных формы с помощью listener submit.</li>
                        <li>Без отправки на сервер провести валидацию введенных данных, если login=="admin" & pass=="admin" вывести сообщение об успехе, иначе сообщение о неуспехе</li>
                        <li>Реализовать скрипт сохранения учетных данных и автоподстановку оных с помощью localStorage</li>
                    </ul>
                </li>
            </ul>
        </Box>,
    2:  
        <Box>
            <ul>
                <li>Создать "Hello World" приложение на основе React.</li>
                <li>Для создания можно использовать create-react-app или vite</li>
                <li>Реализовать компонент кнопку, контейнер и использовать их на странице</li>
                <li>Реализовать шаблон страницы и разместить на нем компоненты навигации </li>
                <li>Разместить проект в репозиторий в github</li>
                <li>Прикрепить текстовый файл с сылкой на проект</li>
            </ul>
        </Box>,
    3:
        <Box>  
            <ul>
                <li> Продолжаем задание "Реализовать шаблон страницы и разместить на нем компоненты навигации" (Можно использовать готовые библиотеки Mui/Bootstrap и тд) 
                    <ul>
                        <li>Реализуем компоненты Header, Footer, Menu и Content</li>
                        <li>В меню выводим список лабораторных работ</li>
                        <li>В Content  выводим содержимое лабораторной работы</li>
                    </ul>
                </li>
                <li>Разместить проект в репозиторий в github</li>
                <li>Прикрепить текстовый файл с сылкой на проект</li>
            </ul>
        </Box>,
    4:
        <Box>
            <ul>
                <li>Реализовать изменение темы (день/ночь) используя Context</li>
                <li>useState и useEffect - простые примеры
                    <ul>
                        <li>useEffect на монтировании и размонтировании страницы</li>
                    </ul>
                </li>
                <li>Внедрить в проект react-router
                    <ul>
                        <li>В меню проекта реализовать ссылки переходы</li>
                        <li>В Content реализовать обработчик роутов</li>
                    </ul>
                </li>
                <li>Внедрить в проект redux
                    <ul>
                        <li>Реализовать несколько action и reducer, например increment/ decrement счетчика</li>
                    </ul>
                </li>
            </ul>
        </Box>,
    5:
        <Box>
            <ul>
                <li>Реализовать форму регистрации и форму авторизации с помощью React-hook-forms или Formik (валидация полей)</li>
                <li>Реализовать блок обратной связи. Форма обратной связи и список отзывов</li>
                <li>Обработать submit форм через useCallback функции по примеру Лабораторной работы 1</li>
                <li>Реализовать кастомный хук useLoginState
                    <ul>
                        <li>Выдает true / false -  статус авторизации</li>
                        <li>Если true - отрисовать приложение, иначе форму авторизации</li>
                        <li>Хранить статус авторизации можно в redux, context или localStore</li>
                    </ul>
                </li>
                <li>Реализовать в правом верхнем углу профиль пользователя с кнопкой разлогина</li>
                <li>Разместить лабораторную работу в репозиторий в github отдельным коммитом</li>
                <li>Прикрепить ссылку в виде текста</li>
            </ul>
        </Box>,
    6:
        <Box>
            <ul>
                <li>Реализовать или использовать простой REST сервер</li>
                <li>Реализовать несколько (GET, POST, PUT, DELETE) запросов на сервер используя промисы JS (fetch, axios).
                    <ul>
                        <li>Использовать формы (авторизации, регистрации, обратной связи) отправки данных на сервер из лабораторной работы №5.</li>
                        <li>Добавить возможность редактирования профиля полььзователя</li>
                        <li>Вывести результаты GET запроса от сервера на экран, например, все отзывы обратной связи.</li>
                        <li>Добавить возможность удаления записей обратной связи</li>
                    </ul>
                </li>
                <li>Для оптимизации использовать redux</li>
                <li>Разместить лабораторную работу в репозиторий в github отдельным коммитом</li>
                <li>Прикрепить сылку на проект в виде текста</li>
            </ul>
        </Box>,
    7:
        <Box>
            <ul>
                <li>Внедрить в проект UI Kit Mui/Bootstrap или им подобное, для возможности адаптива.</li>
                <li>Реализовать Header (Главная, О себе) - отдельные страницы.
                    <ul>
                        <li>Изменение темы на темную перенести в Header.</li>
                        <li>Привести профиль пользователя в стандарт библиотеки Mui/Bootstrap</li>
                    </ul>
                </li>
                <li>Реализовать Menu (Drawer/Slider) - Меню по прежнему должно открывать список лабораторных, но должно быть скрываемым и вызываться из Header по кнопке-иконке.</li>
                <li>В нижнем меню организовать вызов быстрых действий (обратная связь и пр)</li>
                <li>Проконтролировать, что приложение стало адаптивным под разные устройства.</li>
                <li>Разместить лабораторную работу в репозиторий в github отдельным коммитом</li>
                <li>Прикрепить сылку на проект в виде текста</li>
            </ul>
        </Box>,
    8:
        <Box>
            <ul>
                <li>Внедрить в проект  таблицы react-table.</li>
                <li>Добавить роли пользователей admin, user</li>
                <li>Реализовать блок администрирования для роли admin
                    <ul>
                        <li>Реализовать страницу список пользователей в виде таблицы</li>
                        <li>Добавить действия Удалить, Заблокировать и тд</li>
                        <li>Перенести в блок администрирования блок обратной связи</li>
                        <li>Добавить действия Удалить, Заблокировать и тд</li>
                    </ul>
                </li>
                <li>В пользовательском приложении оставить блок обратной связи только на чтение</li>
                <li>Добавить возможность сортировки и перетаскивания колонок.
                    <ul>
                        <li>Реализовать динамическую подгрузку данных (виртуализация) при скроллировании</li>
                        <li>Для просмотра на мобильных устройствах зафиксировать первую колонку, остальные скроллировать.</li>
                    </ul>
                </li>
                <li>Разместить лабораторную работу в репозиторий в github отдельным коммитом</li>
                <li>Прикрепить  сылку на проект в виде текста</li>
            </ul>
        </Box>,
    9:
        <Box>
            <ul>
                <li>Написать тест для компонента кнопки</li>
                <li>Провести рефакторинг страницы со списком данных с сервера. Переписать запрос к backend через rtk-query(useGetPostsQuery). </li>
                <li>Используя isError, isLoading, isFetching отрисовать спиннер загрузки, сообщение об ошибке и результат успешного запроса</li>
                <li>"Ленивые" импорты. Разбить приложение на Chunks (не обязательно)</li>
                <li>Результат работы разместить на github отдельным коммитом.</li>
                <li>Ссылку на репозиторий приложить к заданию</li>
            </ul>
        </Box>,
};

const LabContent = () => {
    const params = useParams();
    const currentLab = params.labId;

    return (
        <Box sx={{ p: 3, pb: { xs: 8, sm: 8, md: 3 } }}>
        <Typography variant="h4" gutterBottom>
            {`Lab ${currentLab}`}
        </Typography>
        {labContents[currentLab] || <Typography>Выберите лабораторную работу</Typography>}
        </Box>
  );
}

export default LabContent;