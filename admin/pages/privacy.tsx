import { H1, H2, H3, Text, Box, Stack } from "@keystone-ui/core";

export default function PrivacyPolicyPage() {
  return (
    <div
      style={{
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        minHeight: "100vh",
        padding: "2rem 1rem",
      }}
    >
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          background: "white",
          borderRadius: "12px",
          boxShadow:
            "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
          overflow: "hidden",
        }}
      >
        {/* Header Section */}
        <div
          style={{
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            color: "white",
            textAlign: "center",
            padding: "3rem 2rem",
          }}
        >
          <Stack gap="medium" align="center">
            <div
              style={{
                color: "white",
                margin: 0,
                fontSize: "2.5rem",
                fontWeight: "700",
              }}
            >
              <H1>Privacy Policy</H1>
            </div>
            <div
              style={{ color: "rgba(255, 255, 255, 0.9)", fontSize: "1.1rem" }}
            >
              <Text>Best Buddy Study Companion Application</Text>
            </div>
            <div
              style={{
                background: "rgba(255, 255, 255, 0.2)",
                color: "white",
                padding: "0.5rem 1rem",
                borderRadius: "6px",
                fontSize: "0.9rem",
              }}
            >
              Effective Date: {new Date().toLocaleDateString()}
            </div>
          </Stack>
        </div>{" "}
        {/* Content Section */}
        <Box padding="xlarge">
          <Stack gap="xlarge">
            {/* Introduction Section */}
            <div
              style={{
                background: "linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%)",
                padding: "2rem",
                borderRadius: "8px",
                border: "2px solid #2196f3",
              }}
            >
              <Stack gap="medium">
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                >
                  <span style={{ fontSize: "1.5rem" }}>🔒</span>
                  <H2 style={{ margin: 0, color: "#1976d2" }}>
                    1. Introduction
                  </H2>
                </div>
                <Text>
                  This Privacy Policy describes how Best Buddy ("we", "us", or
                  "our") collects, uses, and protects your personal information
                  when you use our mobile application and web services (the
                  "Service").
                </Text>
                <Text>
                  We are committed to protecting your privacy and ensuring the
                  security of your personal information. This policy explains
                  our practices regarding data collection, usage, and
                  disclosure.
                </Text>
              </Stack>
            </div>{" "}
            {/* Information Collection Section */}
            <div
              style={{
                background: "linear-gradient(135deg, #f3e5f5 0%, #e1bee7 100%)",
                padding: "2rem",
                borderRadius: "8px",
                border: "2px solid #9c27b0",
              }}
            >
              <Stack gap="large">
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                >
                  <span style={{ fontSize: "1.5rem" }}>📊</span>
                  <H2 style={{ margin: 0, color: "#7b1fa2" }}>
                    2. Information We Collect
                  </H2>
                </div>

                <div
                  style={{
                    background: "rgba(255, 255, 255, 0.7)",
                    padding: "1.5rem",
                    borderRadius: "6px",
                    border: "1px solid rgba(156, 39, 176, 0.3)",
                  }}
                >
                  <H3 style={{ color: "#7b1fa2" }}>2.1 Personal Information</H3>
                  <Stack gap="medium">
                    <Text>
                      We collect the following personal information when you
                      register and use our Service:
                    </Text>
                    <Box paddingLeft="medium">
                      <Stack gap="small">
                        <Text>• Name and email address</Text>
                        <Text>
                          • Academic institution and course information
                        </Text>
                        <Text>• Profile information you choose to provide</Text>
                        <Text>
                          • User role (Student, Class Representative,
                          Administrator)
                        </Text>
                      </Stack>
                    </Box>
                  </Stack>
                </div>

                <div
                  style={{
                    background: "rgba(255, 255, 255, 0.7)",
                    padding: "1.5rem",
                    borderRadius: "6px",
                    border: "1px solid rgba(156, 39, 176, 0.3)",
                  }}
                >
                  <H3 style={{ color: "#7b1fa2" }}>2.2 Device Information</H3>
                  <Box paddingLeft="medium">
                    <Stack gap="small">
                      <Text>
                        • Device identifiers and push notification tokens
                      </Text>
                      <Text>• Operating system and version</Text>
                      <Text>• App version and usage statistics</Text>
                      <Text>• IP address and general location information</Text>
                    </Stack>
                  </Box>
                </div>

                <div
                  style={{
                    background: "rgba(255, 255, 255, 0.7)",
                    padding: "1.5rem",
                    borderRadius: "6px",
                    border: "1px solid rgba(156, 39, 176, 0.3)",
                  }}
                >
                  <H3 style={{ color: "#7b1fa2" }}>2.3 Usage Data</H3>
                  <Box paddingLeft="medium">
                    <Stack gap="small">
                      <Text>• How you navigate and interact with the app</Text>
                      <Text>
                        • Features used and time spent in the application
                      </Text>
                      <Text>• Error logs and performance data</Text>
                      <Text>
                        • Academic content interactions and preferences
                      </Text>
                    </Stack>
                  </Box>
                </div>
              </Stack>
            </div>{" "}
            {/* Information Usage Section */}
            <div
              style={{
                background: "linear-gradient(135deg, #e8f5e8 0%, #c8e6c9 100%)",
                padding: "2rem",
                borderRadius: "8px",
                border: "2px solid #4caf50",
              }}
            >
              <Stack gap="medium">
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                >
                  <span style={{ fontSize: "1.5rem" }}>🎯</span>
                  <H2 style={{ margin: 0, color: "#388e3c" }}>
                    3. How We Use Your Information
                  </H2>
                </div>
                <Text>
                  We use the collected information for the following purposes:
                </Text>
                <Box paddingLeft="medium">
                  <Stack gap="small">
                    <Text>• To provide and maintain our Service</Text>
                    <Text>
                      • To send you academic notices, updates, and relevant
                      information
                    </Text>
                    <Text>
                      • To personalize your experience and improve our services
                    </Text>
                    <Text>
                      • To communicate with you about your account and our
                      services
                    </Text>
                    <Text>
                      • To provide customer support and respond to your
                      inquiries
                    </Text>
                    <Text>
                      • To detect, prevent, and address technical issues
                    </Text>
                    <Text>
                      • To comply with legal obligations and protect our rights
                    </Text>
                    <Text>
                      • To send push notifications about important academic
                      updates
                    </Text>
                  </Stack>
                </Box>
              </Stack>
            </div>{" "}
            {/* Information Sharing Section */}
            <div
              style={{
                background: "linear-gradient(135deg, #fff3e0 0%, #ffcc80 100%)",
                padding: "2rem",
                borderRadius: "8px",
                border: "2px solid #ff9800",
              }}
            >
              <Stack gap="large">
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                >
                  <span style={{ fontSize: "1.5rem" }}>🤝</span>
                  <H2 style={{ margin: 0, color: "#f57c00" }}>
                    4. Information Sharing and Disclosure
                  </H2>
                </div>

                <div
                  style={{
                    background: "rgba(255, 255, 255, 0.7)",
                    padding: "1.5rem",
                    borderRadius: "6px",
                    border: "1px solid rgba(255, 152, 0, 0.3)",
                  }}
                >
                  <H3 style={{ color: "#f57c00" }}>4.1 With Your Consent</H3>
                  <Text>
                    We may share your personal information with third parties
                    when you give us explicit consent to do so.
                  </Text>
                </div>

                <div
                  style={{
                    background: "rgba(255, 255, 255, 0.7)",
                    padding: "1.5rem",
                    borderRadius: "6px",
                    border: "1px solid rgba(255, 152, 0, 0.3)",
                  }}
                >
                  <H3 style={{ color: "#f57c00" }}>
                    4.2 Academic Information Sharing
                  </H3>
                  <Text>
                    With appropriate permissions, we may share academic-related
                    information with your educational institution, instructors,
                    or authorized academic personnel to facilitate your
                    education.
                  </Text>
                </div>

                <div
                  style={{
                    background: "rgba(255, 255, 255, 0.7)",
                    padding: "1.5rem",
                    borderRadius: "6px",
                    border: "1px solid rgba(255, 152, 0, 0.3)",
                  }}
                >
                  <H3 style={{ color: "#f57c00" }}>4.3 Service Providers</H3>
                  <Text>
                    We may employ third-party companies and individuals to
                    facilitate our Service, provide the Service on our behalf,
                    or assist us in analyzing how our Service is used.
                  </Text>
                </div>

                <div
                  style={{
                    background: "rgba(255, 255, 255, 0.7)",
                    padding: "1.5rem",
                    borderRadius: "6px",
                    border: "1px solid rgba(255, 152, 0, 0.3)",
                  }}
                >
                  <H3 style={{ color: "#f57c00" }}>4.4 Legal Requirements</H3>
                  <Text>
                    We may disclose your personal information if required to do
                    so by law or in response to valid requests by public
                    authorities.
                  </Text>
                </div>
              </Stack>
            </div>{" "}
            {/* Push Notifications Section */}
            <div
              style={{
                background: "linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%)",
                padding: "2rem",
                borderRadius: "8px",
                border: "2px solid #2196f3",
              }}
            >
              <Stack gap="medium">
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                >
                  <span style={{ fontSize: "1.5rem" }}>📱</span>
                  <H2 style={{ margin: 0, color: "#1976d2" }}>
                    5. Push Notifications
                  </H2>
                </div>
                <Text>
                  Our Service uses push notifications to keep you informed about
                  important academic updates, including:
                </Text>
                <Box paddingLeft="medium">
                  <Stack gap="small">
                    <Text>• Class announcements and schedule changes</Text>
                    <Text>• Assignment deadlines and exam notifications</Text>
                    <Text>• Study group updates and meeting reminders</Text>
                    <Text>
                      • Important messages from instructors or classmates
                    </Text>
                  </Stack>
                </Box>
                <Text>
                  You can control these notifications through your device
                  settings and may opt out at any time.
                </Text>
              </Stack>
            </div>{" "}
            {/* Data Security Section */}
            <div
              style={{
                background: "linear-gradient(135deg, #ffebee 0%, #ffcdd2 100%)",
                padding: "2rem",
                borderRadius: "8px",
                border: "2px solid #f44336",
              }}
            >
              <Stack gap="medium">
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                >
                  <span style={{ fontSize: "1.5rem" }}>🔐</span>
                  <H2 style={{ margin: 0, color: "#d32f2f" }}>
                    6. Data Security
                  </H2>
                </div>
                <Text>
                  We implement appropriate security measures to protect your
                  personal information against unauthorized access, alteration,
                  disclosure, or destruction.
                </Text>
                <Text>
                  However, please remember that no method of transmission over
                  the Internet or electronic storage is 100% secure, and we
                  cannot guarantee absolute security.
                </Text>
              </Stack>
            </div>{" "}
            {/* Data Retention Section */}
            <div
              style={{
                background: "linear-gradient(135deg, #f9f9f9 0%, #e0e0e0 100%)",
                padding: "2rem",
                borderRadius: "8px",
                border: "2px solid #9e9e9e",
              }}
            >
              <Stack gap="medium">
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                >
                  <span style={{ fontSize: "1.5rem" }}>⏰</span>
                  <H2 style={{ margin: 0, color: "#424242" }}>
                    7. Data Retention
                  </H2>
                </div>
                <Text>
                  We retain your personal information only for as long as
                  necessary to fulfill the purposes outlined in this Privacy
                  Policy, unless a longer retention period is required by law.
                </Text>
                <Text>
                  When you delete your account, we will delete your personal
                  information, except for information we are required to retain
                  for legal, accounting, or security purposes.
                </Text>
              </Stack>
            </div>{" "}
            {/* User Rights Section */}
            <div
              style={{
                background: "linear-gradient(135deg, #e8f5e8 0%, #c8e6c9 100%)",
                padding: "2rem",
                borderRadius: "8px",
                border: "2px solid #4caf50",
              }}
            >
              <Stack gap="medium">
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                >
                  <span style={{ fontSize: "1.5rem" }}>⚖️</span>
                  <H2 style={{ margin: 0, color: "#388e3c" }}>
                    8. Your Rights and Choices
                  </H2>
                </div>
                <Text>You have the right to:</Text>
                <Box paddingLeft="medium">
                  <Stack gap="small">
                    <Text>• Access and review your personal information</Text>
                    <Text>
                      • Request correction of inaccurate personal information
                    </Text>
                    <Text>• Request deletion of your personal information</Text>
                    <Text>
                      • Object to or restrict the processing of your information
                    </Text>
                    <Text>• Request data portability</Text>
                    <Text>
                      • Withdraw consent where processing is based on consent
                    </Text>
                  </Stack>
                </Box>
                <Text>
                  To exercise these rights, please contact us through the
                  application's support section.
                </Text>
              </Stack>
            </div>{" "}
            {/* Children's Privacy Section */}
            <div
              style={{
                background: "linear-gradient(135deg, #fff3e0 0%, #ffcc80 100%)",
                padding: "2rem",
                borderRadius: "8px",
                border: "2px solid #ff9800",
              }}
            >
              <Stack gap="medium">
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                >
                  <span style={{ fontSize: "1.5rem" }}>👶</span>
                  <H2 style={{ margin: 0, color: "#f57c00" }}>
                    9. Children's Privacy
                  </H2>
                </div>
                <Text>
                  Our Service is intended for users who are at least 13 years
                  old. We do not knowingly collect personal information from
                  children under 13. If we become aware that we have collected
                  personal information from a child under 13, we will take steps
                  to delete such information.
                </Text>
              </Stack>
            </div>
            {/* International Data Transfers Section */}
            <div
              style={{
                background: "linear-gradient(135deg, #f9f9f9 0%, #e0e0e0 100%)",
                padding: "2rem",
                borderRadius: "8px",
                border: "2px solid #9e9e9e",
              }}
            >
              <Stack gap="medium">
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                >
                  <span style={{ fontSize: "1.5rem" }}>🌍</span>
                  <H2 style={{ margin: 0, color: "#424242" }}>
                    10. International Data Transfers
                  </H2>
                </div>
                <Text>
                  Your information may be transferred to and maintained on
                  computers located outside of your state, province, country, or
                  governmental jurisdiction where data protection laws may
                  differ.
                </Text>
              </Stack>
            </div>
            {/* Third-Party Services Section */}
            <div
              style={{
                background: "linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%)",
                padding: "2rem",
                borderRadius: "8px",
                border: "2px solid #2196f3",
              }}
            >
              <Stack gap="medium">
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                >
                  <span style={{ fontSize: "1.5rem" }}>🔗</span>
                  <H2 style={{ margin: 0, color: "#1976d2" }}>
                    11. Third-Party Services
                  </H2>
                </div>
                <Text>
                  Our Service may contain links to third-party websites or
                  services. We are not responsible for the privacy practices of
                  these third parties. We encourage you to review their privacy
                  policies.
                </Text>
              </Stack>
            </div>
            {/* Policy Changes Section */}
            <div
              style={{
                background: "linear-gradient(135deg, #f3e5f5 0%, #e1bee7 100%)",
                padding: "2rem",
                borderRadius: "8px",
                border: "2px solid #9c27b0",
              }}
            >
              <Stack gap="medium">
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                >
                  <span style={{ fontSize: "1.5rem" }}>📝</span>
                  <H2 style={{ margin: 0, color: "#7b1fa2" }}>
                    12. Changes to This Privacy Policy
                  </H2>
                </div>
                <Text>
                  We may update our Privacy Policy from time to time. We will
                  notify you of any changes by posting the new Privacy Policy in
                  this application and updating the "Last updated" date.
                </Text>
              </Stack>
            </div>
            {/* Contact Section */}
            <div
              style={{
                background: "linear-gradient(135deg, #e8f5e8 0%, #c8e6c9 100%)",
                padding: "2rem",
                borderRadius: "8px",
                border: "2px solid #4caf50",
              }}
            >
              <Stack gap="medium">
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                >
                  <span style={{ fontSize: "1.5rem" }}>📞</span>
                  <H2 style={{ margin: 0, color: "#388e3c" }}>
                    13. Contact Us
                  </H2>
                </div>
                <Text>
                  If you have any questions, concerns, or requests regarding
                  this Privacy Policy or our data practices, please contact us
                  through:
                </Text>
                <Box paddingLeft="medium">
                  <Stack gap="small">
                    <Text>• The Best Buddy application support section</Text>
                    <Text>• Our in-app contact form</Text>
                    <Text>
                      • The support channels provided in the application
                    </Text>
                  </Stack>
                </Box>
              </Stack>
            </div>
            <div
              style={{
                textAlign: "center",
                padding: "1rem",
                borderTop: "2px solid #e0e0e0",
                marginTop: "2rem",
              }}
            >
              <Text size="small" color="neutral500">
                Last updated: {new Date().toLocaleDateString()}
              </Text>
            </div>{" "}
          </Stack>
        </Box>
      </div>
    </div>
  );
}
