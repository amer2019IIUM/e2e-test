Feature: Navigation

    To navigate the user to the pages

    Scenario Outline: sidebar
        Given the user is <user-status>
        And the user is on a page
        Then the user will see the "<navigation-item>" item
        Then the user will able to navigate to "<navigation-item>" page


        Examples:
            | user-status       | navigation-item                                                                                                                              |
            | authenticated     | الصفحة الرئيسية,ابدأ المسابقة,الشروط والأحكام,الفائزون,الإجابات الصحيحة,الملف الشخصي,تغيير كلمة السر,الأسئلة الشائعة,تواصل معنا,تسجيل الخروج |
            | not authenticated | الصفحة الرئيسية,تسجيل الدخول,إنشاء حساب,الشروط والأحكام,الفائزون,الإجابات الصحيحة,الأسئلة الشائعة,تواصل معنا                                 |

    Scenario Outline: footer
        Given the user is on a page
        Then the user will see <social-media> icon
        Then the user will be able to navigate to the <social-media> website
        Then the user will able to navigate to IslamQA website

        Examples:
            | social-media                                                                                                                                                                                  |
            | https://www.facebook.com/IslamQAcom,https://twitter.com/IslamQAcom,https://www.youtube.com/channel/UCNiLZ4Nq_eh1YeItHqahtVg,https://soundcloud.com/islamqa,https://www.instagram.com/islamqa/ |


    Scenario: Logo
        Given the user is on a page
        When the clicks on the logo
        Then the user will navigate to home page
