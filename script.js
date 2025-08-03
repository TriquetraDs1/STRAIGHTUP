document.addEventListener('DOMContentLoaded', () => {
    // --- COMMON ELEMENTS ACROSS PAGES ---
    const modal = document.getElementById('modal'); // Generic modal for homepage
    const closeButton = document.querySelector('.close-button'); // Close button for homepage modal
    const modalOkBtn = document.querySelector('.modal-ok-btn'); // OK button for homepage modal

    // --- DARK/LIGHT THEME TOGGLE ELEMENT ---
    const themeToggleButton = document.getElementById('theme-toggle');


    // --- HOMEPAGE SPECIFIC ELEMENTS (index.html) ---
    const getStartedLink = document.getElementById('getStartedBtn'); // "Join the Community" button/link
    const mainContent = document.querySelector('.main-content'); // Container for logo and button
    const mainLogoText = document.querySelector('.main-logo-text'); // The "StraightUp" H1 element


    // --- REGISTER PAGE SPECIFIC ELEMENTS (register.html) ---
    const form = document.getElementById('registerForm'); // The registration form itself
    const successModal = document.getElementById('successModal'); // The success modal for registration
    const closeModalBtn = document.getElementById('closeModal'); // Close button for register modal
    const goHomeBtn = document.getElementById('goHome'); // "Go to Home" button in register modal
    const goToDashboardDevBtn = document.getElementById('goToDashboardDevBtn'); // Dev button on register page


    // --- LOGIN PAGE SPECIFIC ELEMENTS (login.html) ---
    const loginForm = document.getElementById('loginForm');
    const loginModal = document.getElementById('loginModal'); // Modal for login status
    const loginModalTitle = document.getElementById('modalTitle'); // Title inside login modal
    const loginModalDescription = document.getElementById('modalDescription'); // Description inside login modal
    const loginModalActionBtn = document.getElementById('modalActionBtn'); // Action button inside login modal
    const loginCloseModalSpan = document.getElementById('closeModal'); // Close button for login modal


    // --- DASHBOARD PAGE SPECIFIC ELEMENTS (dashboard.html) ---
    const userNameSpan = document.getElementById('userName'); // Span to display user's name
    const logoutBtn = document.getElementById('logoutBtn'); // Logout button (main footer)

    // NEW: Meet the Developers button for Dashboard footer
    const meetDevelopersBtn = document.querySelector('.dashboard-footer .btn-secondary[href="aboutus.html"]');

    const dashboardTextElements = document.querySelectorAll( // Elements for font cycling (excluding tagline)
        '.about-straightup p, .category-card p, .dashboard-footer p, .dashboard-footer a'
    );
    const dashboardTaglineElement = document.querySelector('.dashboard-tagline'); // The tagline element


    // --- Sidebar Toggle Logic ---
    const sidebarToggle = document.getElementById('sidebar-toggle');
    const sidebar = document.getElementById('sidebar');
    const closeSidebarButton = document.querySelector('.close-sidebar-button');
    const body = document.body;

    const logoutBtnSidebar = document.getElementById('logoutBtnSidebar');
    // NEW: Meet the Developers button for Sidebar footer
    const meetDevelopersBtnSidebar = document.querySelector('.sidebar-footer .meet-developers-sidebar');


    // --- SPORTS PAGE SPECIFIC ELEMENTS (sports.html) ---
    const sportActivityForms = document.querySelectorAll('.sport-form');


    // --- FOOD PAGE SPECIFIC ELEMENTS (food.html) ---
    const foodPlaceCards = document.querySelectorAll('.food-place-card');
    const foodTimingModal = document.getElementById('foodTimingModal'); // The modal for setting food timings
    const closeFoodModalBtn = document.getElementById('closeFoodModal'); // Close button for food timing modal
    const foodModalTitle = document.getElementById('foodModalTitle'); // Title inside food timing modal
    const foodTimingForm = document.getElementById('foodTimingForm'); // Form inside food timing modal
    const foodTimeInput = document.getElementById('food-time'); // Time input in food timing modal
    const foodDetailsTextarea = document.getElementById('food-details'); // Details textarea in food timing modal

    // --- COMPLETE REGISTRATION PAGE SPECIFIC ELEMENTS (completeregister.html) ---
    const completeRegistrationForm = document.getElementById('completeRegistrationForm');

    // --- FEEDBACK PAGE SPECIFIC ELEMENTS (feedback.html) ---
    const feedbackForm = document.getElementById('feedbackForm');
    const ratingStars = document.getElementById('ratingStars');
    const ratingInput = document.getElementById('rating');


    // --- IMPORTANT: DEBUGGING CHECKS FOR ALL ELEMENTS ---
    console.log("--- Script Loading & Element Checks ---");
    if (!themeToggleButton) console.warn("JS Warning: 'theme-toggle' button not found! Dark/Light mode won't work.");
    if (getStartedLink && !mainContent) console.error("Error: 'mainContent' not found on homepage!");
    if (mainLogoText && mainLogoText.tagName !== 'H1') console.warn("JS Warning: '.main-logo-text' is not an H1. Text splitting might affect styling.");

    if (!getStartedLink && !form && !loginForm && !userNameSpan && !document.querySelector('.sports-container') && !document.querySelector('.food-container') && !completeRegistrationForm && !feedbackForm) {
        console.warn("Warning: No primary page element (homepage/register/login/dashboard/sports/food/complete_register/feedback) found. Is this script linked to a main content page?");
    }
    if (form) {
        if (!document.getElementById('name')) console.error("JS Error: 'name' input not found on register page!");
        if (!document.getElementById('regNo')) console.error("JS Error: 'regNo' input not found on register page!");
        if (!document.getElementById('email')) console.error("JS Error: 'email' input not found on register page!");
        if (!document.getElementById('photo')) console.error("JS Error: 'photo' input not found on register page!");
        if (!successModal) console.error("JS Error: 'successModal' for register page not found!");
        if (!closeModalBtn) console.error("JS Error: 'closeModal' button for register page not found!");
        if (!goHomeBtn) console.error("JS Error: 'goHome' button for register page not found!");
    }
    if (loginForm) {
        if (!document.getElementById('email')) console.error("JS Error: 'email' input for login not found!");
        if (!document.getElementById('password')) console.error("JS Error: 'password' input for login not found!");
        if (!loginModal) console.error("JS Error: 'loginModal' not found!");
        if (!loginModalTitle) console.error("Error: 'modalTitle' for login modal not found!");
        if (!loginModalDescription) console.error("Error: 'modalDescription' for login modal not found!");
        if (!loginModalActionBtn) console.error("Error: 'modalActionBtn' for login modal not found!");
        if (!loginCloseModalSpan) console.error("Error: 'closeModal' for login modal not found!");
    }
    if (userNameSpan && !logoutBtn) console.error("JS Error: 'logoutBtn' not found on dashboard page!");
    // Check for new Meet the Developers buttons
    if (document.querySelector('.dashboard-container') && !meetDevelopersBtn) console.warn("JS Warning: 'Meet the Developers' button not found in dashboard footer!");
    if (sidebar && !meetDevelopersBtnSidebar) console.warn("JS Warning: 'Meet the Developers' button not found in sidebar footer!");

    if (document.querySelector('.sports-container') && sportActivityForms.length === 0) console.warn("JS Warning: No '.sport-form' elements found on sports page, but .sports-container exists!");
    if (document.querySelector('.food-container') && foodPlaceCards.length === 0) console.warn("JS Warning: No '.food-place-card' elements found on food page, but .food-container exists!");
    if (completeRegistrationForm) {
        if (!document.getElementById('age')) console.error("JS Error: 'age' input not found on complete registration page!");
        if (!document.getElementById('dob')) console.error("JS Error: 'dob' input not found on complete registration page!");
        if (!document.getElementById('hobbies')) console.error("JS Error: 'hobbies' textarea not found on complete registration page!");
    }
    if (feedbackForm) {
        if (!document.getElementById('feedbackType')) console.error("JS Error: 'feedbackType' select not found on feedback page!");
        if (!ratingStars) console.error("JS Error: 'ratingStars' container not found on feedback page!");
        if (!ratingInput) console.error("JS Error: 'rating' input not found on feedback page!");
        if (!document.getElementById('subject')) console.error("JS Error: 'subject' input not found on feedback page!");
        if (!document.getElementById('comments')) console.error("JS Error: 'comments' textarea not found on feedback page!");
    }


    // --- Dark/Light Theme Toggle Logic ---
    function setTheme(theme) {
        console.log("Attempting to set theme:", theme);
        if (theme === 'dark') {
            document.body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark');
        } else {
            document.body.classList.remove('dark-mode');
            localStorage.setItem('theme', 'light');
        }
        console.log("Theme set. Body classes:", document.body.classList);
        console.log("Local Storage 'theme':", localStorage.getItem('theme'));
    }

    function getPreferredTheme() {
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme) {
            console.log("Found stored theme:", storedTheme);
            return storedTheme;
        }
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        console.log("No stored theme. System preference (dark):", systemPrefersDark);
        return systemPrefersDark ? 'dark' : 'light';
    }

    setTheme(getPreferredTheme());
    console.log("Initial theme applied.");

    if (themeToggleButton) {
        themeToggleButton.addEventListener('click', () => {
            console.log("Theme toggle button clicked!");
            const currentTheme = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            setTheme(newTheme);
        });
    }

    // --- Sidebar Toggle Logic (moved from top for better organization) ---
    // Function to open sidebar
    function openSidebar() {
        sidebar.classList.add('open');
        body.classList.add('sidebar-open');
        // Add an overlay to click outside to close
        let overlay = document.getElementById('sidebar-overlay');
        if (!overlay) { // Create overlay only if it doesn't exist
            overlay = document.createElement('div');
            overlay.id = 'sidebar-overlay';
            overlay.classList.add('sidebar-overlay');
            document.body.appendChild(overlay);
        }
        overlay.addEventListener('click', closeSidebar);
        overlay.style.display = 'block'; // Ensure it's visible
    }

    // Function to close sidebar
    function closeSidebar() {
        sidebar.classList.remove('open');
        body.classList.remove('sidebar-open');
        const overlay = document.getElementById('sidebar-overlay');
        if (overlay) {
            overlay.removeEventListener('click', closeSidebar);
            overlay.style.display = 'none'; // Hide it
        }
    }

    // Event listeners for sidebar toggle
    if (sidebarToggle) {
        sidebarToggle.addEventListener('click', openSidebar);
    }
    if (closeSidebarButton) {
        closeSidebarButton.addEventListener('click', closeSidebar);
    }


    // --- Logout Button Logic (for both dashboard and sidebar) ---
    function handleLogout() {
        // In a real application, you would clear user session/token here
        console.log('User logged out!');
        window.location.href = 'login.html'; // Redirect to login page
    }

    if (logoutBtn) { // Main dashboard logout button
        logoutBtn.addEventListener('click', handleLogout);
    }
    if (logoutBtnSidebar) { // Sidebar logout button
        logoutBtnSidebar.addEventListener('click', handleLogout);
    }

    // --- NEW: Meet the Developers Button Logic ---
    function goToAboutUs() {
        window.location.href = 'aboutus.html';
    }

    if (meetDevelopersBtn) { // Main dashboard footer button
        meetDevelopersBtn.addEventListener('click', goToAboutUs);
    }
    if (meetDevelopersBtnSidebar) { // Sidebar footer button
        meetDevelopersBtnSidebar.addEventListener('click', goToAboutUs);
    }


    // --- Modal Logic (re-usable for various status messages) ---
    const statusModal = document.getElementById('statusModal'); // This is the generic status modal used by completeRegistrationForm and feedbackForm
    const statusCloseModalBtn = document.getElementById('closeModal'); // Close button for the generic status modal
    const statusModalActionBtn = document.getElementById('modalActionBtn'); // Action button for the generic status modal
    const statusModalTitle = document.getElementById('modalTitle'); // Title inside the generic status modal
    const statusModalDescription = document.getElementById('modalDescription'); // Description inside the generic status modal


    function showStatusModal(title, message, actionCallback = null) {
        if (statusModalTitle) statusModalTitle.textContent = title;
        if (statusModalDescription) statusModalDescription.textContent = message;
        if (statusModal) statusModal.classList.add('show');
        if (statusModalActionBtn) {
            // Remove previous event listener to prevent multiple executions
            const oldActionBtn = statusModalActionBtn;
            const newActionBtn = oldActionBtn.cloneNode(true);
            oldActionBtn.parentNode.replaceChild(newActionBtn, oldActionBtn);
            newActionBtn.onclick = () => {
                if (actionCallback) actionCallback();
                hideStatusModal();
            };
        }
    }

    function hideStatusModal() {
        if (statusModal) statusModal.classList.remove('show');
    }

    // Re-bind close event listener if it was cloned/replaced
    if (statusCloseModalBtn) {
        statusCloseModalBtn.addEventListener('click', hideStatusModal);
    }

    // Close modal if clicking outside
    if (statusModal) {
        statusModal.addEventListener('click', (event) => {
            if (event.target === statusModal) {
                hideStatusModal();
            }
        });
    }

    // --- HOMEPAGE SPECIFIC FUNCTIONALITY (index.html) ---
    if (mainContent && getStartedLink && mainLogoText) {
        function splitLogoTextForAnimation() {
            const text = mainLogoText.textContent;
            mainLogoText.textContent = '';
            const letters = text.split('');

            console.log("Splitting text for animation:", text);
            letters.forEach((char, index) => {
                const span = document.createElement('span');
                span.textContent = char;
                span.style.animationDelay = `${index * 0.05}s`;
                span.classList.add('letter');

                // Assuming "StraightUp" for 'G' and 'H' logic
                // if the text is literally "StraightUp", then 'g' and 'h' are at indices 2 and 3 (0-indexed)
                if ((char.toLowerCase() === 'g' && index === 2) || (char.toLowerCase() === 'h' && index === 3)) {
                    span.classList.add('fly-away-letter');
                    console.log(`Character '${char}' at index ${index} assigned 'fly-away-letter'.`);
                } else if (index >= 7) { // This will target 't', 'U', 'p' in "StraightUp"
                    span.classList.add('shift-left-letter');
                    console.log(`Character '${char}' at index ${index} assigned 'shift-left-letter'.`);
                } else {
                    console.log(`Character '${char}' at index ${index} assigned only 'letter'.`);
                }
                mainLogoText.appendChild(span);
            });

            setTimeout(() => {
                mainLogoText.classList.add('animate-letters');
                console.log("mainLogoText now has 'animate-letters' class.");

                setTimeout(() => {
                    document.querySelectorAll('.main-logo-text .fly-away-letter').forEach(letterSpan => {
                        letterSpan.classList.add('fly-away-active');
                        console.log("Triggered 'fly-away-active' for:", letterSpan.textContent);
                    });
                }, 1000);

                setTimeout(() => {
                    document.querySelectorAll('.main-logo-text .shift-left-letter').forEach(letterSpan => {
                        letterSpan.classList.add('shift-left-active');
                        console.log("Triggered 'shift-left-active' for:", letterSpan.textContent);
                    });
                }, 1500);

            }, 50);
        }

        setTimeout(() => {
            if (mainContent) {
                mainContent.classList.add('fade-in');
                splitLogoTextForAnimation();
            }
        }, 100);

        const showGenericModal = () => {
            if (modal) {
                modal.classList.add('show');
                document.body.style.overflow = 'hidden';
            }
        };

        const hideGenericModal = () => {
            if (modal) {
                modal.classList.remove('show');
                document.body.style.overflow = '';
            }
        };

        if (modalOkBtn) {
            modalOkBtn.addEventListener('click', () => {
                // Changed from alert to showStatusModal for consistency
                showStatusModal("Action", "You clicked 'Let's Go!' from the generic homepage modal!", hideGenericModal);
            });
        }

        if (closeButton) {
            closeButton.addEventListener('click', hideGenericModal);
        }
        window.addEventListener('click', (event) => {
            if (modal && event.target === modal) {
                hideGenericModal();
            }
        });
    }


    // --- REGISTER PAGE SPECIFIC FUNCTIONALITY (register.html) ---
    if (form) {
        const nameInput = document.getElementById('name');
        const regNoInput = document.getElementById('regNo');
        const emailInput = document.getElementById('email');
        const photoInput = document.getElementById('photo');

        form.addEventListener('submit', function (e) {
            e.preventDefault();
            const name = nameInput.value.trim();
            const regNo = regNoInput.value.trim();
            const email = emailInput.value.trim();
            const photo = photoInput.files[0];

            if (!name || !regNo || !email || !photo) {
                showStatusModal('Missing Info', 'Please fill in all fields and upload a photo.');
                return;
            }
            if (!email.endsWith('@srmist.edu.in')) {
                showStatusModal('Invalid Email', 'Please use your official SRM email address (e.g., your.name@srmist.edu.in).');
                return;
            }
            if (successModal) successModal.classList.add('show');
        });

        if (closeModalBtn) { // This closeModalBtn is for the register success modal
            closeModalBtn.onclick = () => {
                if (successModal) successModal.classList.remove('show');
            };
        }

        if (goHomeBtn) {
            goHomeBtn.onclick = () => {
                window.location.href = 'index.html';
            };
        }

        if (goToDashboardDevBtn) {
            goToDashboardDevBtn.addEventListener('click', () => {
                window.location.href = 'dashboard.html';
            });
        }

        window.addEventListener('click', (event) => {
            if (successModal && event.target === successModal) {
                successModal.classList.remove('show');
            }
        });
    }


    // --- LOGIN PAGE SPECIFIC FUNCTIONALITY (login.html) ---
    if (loginForm) {
        const emailInput = document.getElementById('email');
        const passwordInput = document.getElementById('password');

        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = emailInput.value.trim();
            const password = passwordInput.value;

            if (!email || !password) {
                if (loginModalTitle && loginModalDescription && loginModalActionBtn) {
                    loginModalTitle.textContent = 'Missing Info';
                    loginModalDescription.textContent = 'Please enter both email and password.';
                    loginModalActionBtn.textContent = 'OK';
                    loginModalActionBtn.disabled = false;
                    loginModalActionBtn.onclick = () => { loginModal.classList.remove('show'); };
                }
                if (loginModal) loginModal.classList.add('show');
                return;
            }

            if (loginModalTitle && loginModalDescription && loginModalActionBtn) {
                loginModalTitle.textContent = 'Logging In...';
                loginModalDescription.textContent = 'Please wait while we verify your credentials.';
                loginModalActionBtn.textContent = 'OK';
                loginModalActionBtn.disabled = true;
            }
            if (loginModal) loginModal.classList.add('show');

            setTimeout(() => {
                const isValidLogin = (email === 'test@srmist.edu.in' && password === 'password123');
                if (loginModalTitle && loginModalDescription && loginModalActionBtn) {
                    if (isValidLogin) {
                        loginModalTitle.textContent = 'Login Successful!';
                        loginModalDescription.textContent = 'Welcome back to StraitUp!';
                        loginModalActionBtn.textContent = 'Go to Dashboard';
                        loginModalActionBtn.disabled = false;
                        loginModalActionBtn.onclick = () => { window.location.href = 'dashboard.html'; };
                    } else {
                        loginModalTitle.textContent = 'Login Failed';
                        loginModalDescription.textContent = 'Invalid email or password. Please try again.';
                        loginModalActionBtn.textContent = 'Try Again';
                        loginModalActionBtn.disabled = false;
                        loginModalActionBtn.onclick = () => { loginModal.classList.remove('show'); };
                    }
                }
            }, 1500);
        });

        if (loginCloseModalSpan) {
            loginCloseModalSpan.onclick = () => {
                if (loginModal) loginModal.classList.remove('show');
            };
        }

        window.onclick = function (event) {
            if (loginModal && event.target === loginModal) {
                loginModal.classList.remove('show');
            }
        };
    }

    // --- DASHBOARD PAGE SPECIFIC FUNCTIONALITY (dashboard.html) ---
    if (userNameSpan) {
        const urlParams = new URLSearchParams(window.location.search);
        const userName = urlParams.get('name') || 'User';
        userNameSpan.textContent = userName;

        // Dashboard Font Changing Logic (runs only on dashboard page)
        const fontsToCycle = [
            'Nunito',
            'Open Sans',
            'Lato',
            'Roboto',
            'Montserrat'
        ];
        let currentFontIndex = 0;

        function changeDashboardFonts() {
            currentFontIndex = (currentFontIndex + 1) % fontsToCycle.length;
            const selectedFont = fontsToCycle[currentFontIndex];
            document.querySelectorAll(
                '.about-straightup p, .category-card p, .dashboard-footer p, .dashboard-footer a'
            ).forEach(element => { // Exclude tagline from this font cycle
                element.style.fontFamily = `'${selectedFont}', sans-serif`;
            });
            console.log(`Dashboard font changed to: ${selectedFont}`);
        }

        changeDashboardFonts();
        setInterval(changeDashboardFonts, 15000);

        // --- Dashboard Tagline Cycling Logic ---
        const taglines = [
            'Your hub for connecting with the SRM KTR community.',
            'Your hub for connecting with fellow freshers.',
            'Your hub for connecting with your seniors.',
            'Your hub for connecting with your professors.'
        ];
        let currentTaglineIndex = 0;

        function cycleTagline() {
            if (dashboardTaglineElement) {
                dashboardTaglineElement.style.opacity = 0; // Fade out
                setTimeout(() => {
                    currentTaglineIndex = (currentTaglineIndex + 1) % taglines.length;
                    dashboardTaglineElement.textContent = taglines[currentTaglineIndex];
                    dashboardTaglineElement.style.opacity = 1; // Fade in
                }, 500); // Half a second for fade out
            }
        }

        // Initial set and then cycle every 5 seconds
        if (dashboardTaglineElement) {
            dashboardTaglineElement.textContent = taglines[currentTaglineIndex]; // Set initial tagline
            setInterval(cycleTagline, 5000); // Cycle every 5 seconds
        }
    }

    // --- SPORTS PAGE SPECIFIC FUNCTIONALITY (sports.html) ---
    if (sportActivityForms.length > 0) {
        sportActivityForms.forEach(form => {
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                const sportName = this.dataset.sport;
                const time = this.querySelector('input[type="time"]').value;
                const details = this.querySelector('textarea').value.trim();

                let message = `Looking for players for ${sportName}`;
                if (time) message += ` at ${time}`;
                if (details) message += ` with details: "${details}"`;
                message += `\n\n(In a real app, this would send data to a backend to find matches!)`;

                // Changed from alert to showStatusModal for consistency
                showStatusModal('Activity Request', message, () => {
                    this.reset();
                });
            });
        });
    }

    // --- FOOD PAGE SPECIFIC FUNCTIONALITY (food.html) ---
    if (foodPlaceCards.length > 0) {
        foodPlaceCards.forEach(card => {
            card.addEventListener('click', function(e) {
                e.preventDefault();
                const placeName = this.dataset.place;

                if (foodModalTitle) foodModalTitle.textContent = `Set Time for ${placeName}`;
                if (foodTimingModal) foodTimingModal.classList.add('show');
                if (document.body) document.body.style.overflow = 'hidden';

                if (foodTimingForm) foodTimingForm.dataset.selectedPlace = placeName;
                if (foodTimeInput) foodTimeInput.value = '';
                if (foodDetailsTextarea) foodDetailsTextarea.value = '';
            });
        });

        if (foodTimingForm) {
            foodTimingForm.addEventListener('submit', function(e) {
                e.preventDefault();

                const selectedPlace = this.dataset.selectedPlace;
                const time = foodTimeInput.value;
                const details = foodDetailsTextarea.value.trim();

                let message = `You want to go to ${selectedPlace}`;
                if (time) message += ` at ${time}`;
                if (details) message += ` with details: "${details}"`;
                message += `\n\n(In a real app, this would send data to a backend!)`;

                // Changed from alert to showStatusModal for consistency
                showStatusModal('Food Plan', message, () => {
                    if (foodTimingModal) foodTimingModal.classList.remove('show');
                    if (document.body) document.body.overflow = '';
                    this.reset();
                });
            });
        }

        if (closeFoodModalBtn) {
            closeFoodModalBtn.addEventListener('click', () => {
                if (foodTimingModal) foodTimingModal.classList.remove('show');
                if (document.body) document.body.style.overflow = '';
            });
        }

        window.addEventListener('click', (event) => {
            if (foodTimingModal && event.target === foodTimingModal) {
                foodTimingModal.classList.remove('show');
                if (document.body) document.body.style.overflow = '';
            }
        });
    }

    // --- Complete Registration Form Submission Logic (for completeregister.html) ---
    if (completeRegistrationForm) {
        completeRegistrationForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent default form submission

            // In a real app, you'd collect data and send to a server
            const age = document.getElementById('age').value;
            const dob = document.getElementById('dob').value;
            const hobbies = document.getElementById('hobbies').value;

            console.log('Completing registration with:', { age, dob, hobbies });

            showStatusModal('Profile Update', 'Updating your profile...', () => {
                // This callback runs when "OK" is clicked on the modal
                // In a real app, this would be after a successful API response
                window.location.href = 'dashboard.html'; // Redirect to dashboard
            });

            // Simulate a delay for the "API call"
            setTimeout(() => {
                showStatusModal('Profile Update', 'Your profile has been successfully updated!', () => {
                    window.location.href = 'dashboard.html'; // Redirect after success
                });
            }, 1500); // Simulate 1.5 second delay
        });
    }

    // --- Feedback Form Logic (for feedback.html) ---
    if (feedbackForm) {
        if (ratingStars) { // Check if ratingStars exists on this page
            ratingStars.addEventListener('click', (event) => {
                const clickedStar = event.target.closest('i');
                if (clickedStar && clickedStar.dataset.value) {
                    const value = parseInt(clickedStar.dataset.value);
                    ratingInput.value = value; // Set the hidden input value

                    // Update star appearance
                    Array.from(ratingStars.children).forEach(star => {
                        if (parseInt(star.dataset.value) <= value) {
                            star.classList.remove('far');
                            star.classList.add('fas');
                        } else {
                            star.classList.remove('fas');
                            star.classList.add('far');
                        }
                    });
                }
            });

            // Optional: Reset stars if user clicks outside or wants to clear
            ratingStars.addEventListener('mouseleave', () => {
                // If rating is 0, clear all stars on mouse leave
                if (ratingInput.value === '0') {
                    Array.from(ratingStars.children).forEach(star => {
                        star.classList.remove('fas');
                        star.classList.add('far');
                    });
                }
            });
        }

        feedbackForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent default form submission

            const feedbackData = {
                type: document.getElementById('feedbackType').value,
                rating: document.getElementById('rating').value,
                subject: document.getElementById('subject').value,
                comments: document.getElementById('comments').value,
                name: document.getElementById('feedbackName').value,
                email: document.getElementById('feedbackEmail').value
            };

            console.log('Feedback submitted:', feedbackData);

            showStatusModal('Feedback Submission', 'Thank you for your feedback! We appreciate it.', () => {
                window.location.href = 'dashboard.html'; // Redirect to dashboard after submission
            });

            // Simulate a delay for the "API call"
            setTimeout(() => {
                // In a real application, you would send feedbackData to your backend here
                // On success:
                showStatusModal('Feedback Submission', 'Your feedback has been successfully sent!', () => {
                    window.location.href = 'dashboard.html'; // Redirect after success
                });
                // On error:
                // showModal('Submission Failed', 'There was an error sending your feedback. Please try again.', null);
            }, 1500); // Simulate 1.5 second delay
        });
    }
});