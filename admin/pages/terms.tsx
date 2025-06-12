import { H1, H2, Text, Box, Stack } from "@keystone-ui/core";

export default function TermsAndConditionsPage() {
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
              <H1>Terms and Conditions</H1>
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
        </div>

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
                  <span style={{ fontSize: "1.5rem" }}>📋</span>
                  <H2 style={{ margin: 0, color: "#1976d2" }}>
                    1. Introduction
                  </H2>
                </div>
                <Text>
                  Welcome to Best Buddy, a comprehensive study companion
                  application designed to enhance your academic experience.
                  These Terms and Conditions ("Terms") govern your use of our
                  mobile application and web services.
                </Text>
                <Text>
                  By accessing or using our Service, you agree to be bound by
                  these Terms. If you disagree with any part of these terms,
                  then you may not access the Service.
                </Text>
              </Stack>
            </div>

            {/* Acceptance Section */}
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
                  <span style={{ fontSize: "1.5rem" }}>✅</span>
                  <H2 style={{ margin: 0, color: "#424242" }}>
                    2. Acceptance of Terms
                  </H2>
                </div>
                <Text>
                  By creating an account or using our Service, you acknowledge
                  that you have read, understood, and agree to be bound by these
                  Terms and our Privacy Policy.
                </Text>
              </Stack>
            </div>

            {/* Service Description Section */}
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
                  <span style={{ fontSize: "1.5rem" }}>📱</span>
                  <H2 style={{ margin: 0, color: "#388e3c" }}>
                    3. Description of Service
                  </H2>
                </div>
                <Text>
                  Best Buddy is designed to support your academic journey by
                  providing tools and features including:
                </Text>
                <div
                  style={{
                    background: "rgba(255, 255, 255, 0.7)",
                    padding: "1.5rem",
                    borderRadius: "6px",
                    border: "1px solid rgba(76, 175, 80, 0.3)",
                  }}
                >
                  <Stack gap="small">
                    <Text>📢 Receiving class notices and announcements</Text>
                    <Text>📅 Managing class tests and academic schedules</Text>
                    <Text>👥 Connecting with classmates and study groups</Text>
                    <Text>
                      📚 Accessing educational resources and materials
                    </Text>
                  </Stack>
                </div>
              </Stack>
            </div>

            {/* User Accounts Section */}
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
                  <span style={{ fontSize: "1.5rem" }}>👤</span>
                  <H2 style={{ margin: 0, color: "#f57c00" }}>
                    4. User Accounts
                  </H2>
                </div>
                <Text>
                  When you create an account with us, you must provide
                  information that is accurate, complete, and current at all
                  times. You are responsible for safeguarding your account and
                  all activities that occur under your account.
                </Text>
                <div
                  style={{
                    background: "rgba(255, 255, 255, 0.7)",
                    padding: "1.5rem",
                    borderRadius: "6px",
                    border: "1px solid rgba(255, 152, 0, 0.3)",
                  }}
                >
                  <Stack gap="small">
                    <Text>
                      🔐 Maintaining the confidentiality of your account
                      credentials
                    </Text>
                    <Text>👤 All activities that occur under your account</Text>
                    <Text>
                      ✅ Providing accurate and complete information during
                      registration
                    </Text>
                    <Text>
                      🚨 Notifying us immediately of any unauthorized use of
                      your account
                    </Text>
                  </Stack>
                </div>
              </Stack>
            </div>

            {/* User Conduct Section */}
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
                  <span style={{ fontSize: "1.5rem" }}>⚠️</span>
                  <H2 style={{ margin: 0, color: "#d32f2f" }}>
                    5. User Conduct
                  </H2>
                </div>
                <Text style={{ color: "#d32f2f" }}>
                  You agree not to use the Service to:
                </Text>
                <div
                  style={{
                    background: "rgba(255, 255, 255, 0.7)",
                    padding: "1.5rem",
                    borderRadius: "6px",
                    border: "1px solid rgba(244, 67, 54, 0.3)",
                  }}
                >
                  <Stack gap="small">
                    <Text>
                      ❌ Upload, post, or transmit any content that is illegal,
                      harmful, or inappropriate
                    </Text>
                    <Text>❌ Harass, abuse, or harm other users</Text>
                    <Text>❌ Impersonate any person or entity</Text>
                    <Text>❌ Violate any applicable laws or regulations</Text>
                    <Text>
                      ❌ Interfere with or disrupt the Service or servers
                    </Text>
                    <Text>
                      ❌ Attempt to gain unauthorized access to any part of the
                      Service
                    </Text>
                  </Stack>
                </div>
              </Stack>
            </div>

            {/* Intellectual Property Section */}
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
                  <span style={{ fontSize: "1.5rem" }}>©️</span>
                  <H2 style={{ margin: 0, color: "#7b1fa2" }}>
                    6. Intellectual Property Rights
                  </H2>
                </div>
                <Text>
                  The Service and its original content, features, and
                  functionality are and will remain the exclusive property of
                  Best Buddy and its licensors. The Service is protected by
                  copyright, trademark, and other laws.
                </Text>
              </Stack>
            </div>

            {/* Privacy Section */}
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
                    7. Privacy Policy
                  </H2>
                </div>
                <Text>
                  Your privacy is important to us. Please review our Privacy
                  Policy, which also governs your use of the Service, to
                  understand our practices regarding the collection and
                  processing of your personal information.
                </Text>
              </Stack>
            </div>

            {/* Push Notifications Section */}
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
                  <span style={{ fontSize: "1.5rem" }}>🔔</span>
                  <H2 style={{ margin: 0, color: "#388e3c" }}>
                    8. Push Notifications
                  </H2>
                </div>
                <Text>
                  By using our Service, you consent to receive push
                  notifications for important academic updates, including class
                  announcements, assignment reminders, and schedule changes. You
                  can disable these notifications through your device settings
                  at any time.
                </Text>
              </Stack>
            </div>

            {/* Service Availability Section */}
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
                  <span style={{ fontSize: "1.5rem" }}>🌐</span>
                  <H2 style={{ margin: 0, color: "#424242" }}>
                    9. Service Availability
                  </H2>
                </div>
                <Text>
                  We strive to maintain continuous availability of our Service,
                  but we do not guarantee that the Service will be available at
                  all times. The Service may be temporarily unavailable due to
                  maintenance, updates, or circumstances beyond our control.
                </Text>
              </Stack>
            </div>

            {/* Disclaimers Section */}
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
                  <span style={{ fontSize: "1.5rem" }}>⚖️</span>
                  <H2 style={{ margin: 0, color: "#f57c00" }}>
                    10. Disclaimers
                  </H2>
                </div>
                <Text>
                  The information on this Service is provided on an "as is"
                  basis. To the fullest extent permitted by law, we exclude all
                  representations, warranties, and conditions relating to our
                  Service and your use of this Service.
                </Text>
              </Stack>
            </div>

            {/* Limitation of Liability Section */}
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
                  <span style={{ fontSize: "1.5rem" }}>🛡️</span>
                  <H2 style={{ margin: 0, color: "#d32f2f" }}>
                    11. Limitation of Liability
                  </H2>
                </div>
                <Text>
                  In no event shall Best Buddy, nor its directors, employees,
                  partners, agents, suppliers, or affiliates, be liable for any
                  indirect, incidental, special, consequential, or punitive
                  damages arising from your use of the Service.
                </Text>
              </Stack>
            </div>

            {/* Termination Section */}
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
                  <span style={{ fontSize: "1.5rem" }}>🚪</span>
                  <H2 style={{ margin: 0, color: "#7b1fa2" }}>
                    12. Termination
                  </H2>
                </div>
                <Text>
                  We may terminate or suspend your account and bar access to the
                  Service immediately, without prior notice or liability, under
                  our sole discretion, for any reason whatsoever and without
                  limitation, including but not limited to a breach of the
                  Terms.
                </Text>
              </Stack>
            </div>

            {/* Changes to Terms Section */}
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
                  <span style={{ fontSize: "1.5rem" }}>📝</span>
                  <H2 style={{ margin: 0, color: "#1976d2" }}>
                    13. Changes to Terms
                  </H2>
                </div>
                <Text>
                  We reserve the right, at our sole discretion, to modify or
                  replace these Terms at any time. If a revision is material, we
                  will try to provide at least 30 days notice prior to any new
                  terms taking effect.
                </Text>
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
            </div>
          </Stack>
        </Box>
      </div>
    </div>
  );
}
